import fs from 'fs';
import path from 'path';
import { parse as parseYaml } from 'yaml';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts');

// gray-matter last shipped in 2021 and depends on js-yaml 3. These files only
// use a YAML front-matter block, which the maintained `yaml` package can read.
function readPost(fileContents) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(fileContents);
  if (!match) {
    return { data: {}, content: fileContents };
  }

  const data = parseYaml(match[1]) ?? {};
  if (data.date instanceof Date) {
    data.date = data.date.toISOString().slice(0, 10);
  }

  return {
    data,
    content: fileContents.slice(match[0].length),
  };
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = readPost(fileContents);

    return {
      id,
      ...data,
    };
  });

  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = readPost(fileContents);

  // remark-prism was abandoned in 2021 and pulled jsdom 16. rehype-prism-plus
  // is the maintained Prism plugin for the remark/rehype pipeline.
  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...data,
  };
}
