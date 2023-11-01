import Layout from '../components/layout'
import Head from 'next/head'
import LinkList from '../components/link-list'
import MyApps from '../components/my-apps'
import { getSortedPostsData } from '../lib/posts'
import { socialLinks } from '../lib/static-content'
import PostList from '../components/post-list'


export default function AllPosts({ allPostsData }) {
  return <Layout>
    <Head>
      <title>Cold takes - inorganik blog</title>
    </Head>
    <section className="prose mt-12 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="col-span-2 sm:col-span-3 row-auto sm:row-span-2">
        <h1>Blog</h1>
        <PostList allPostsData={allPostsData} />

        <h2>Elsewhere</h2>
        <ul>
          <li><a className="text-primary hover-glow" href="https://medium.com/@inorganik">Medium</a></li>
          <li><a className="text-primary hover-glow" href="https://blog.briebug.com/blog/author/Jamie%20Perkins">Briebug blog</a></li>
        </ul>
      </div>
      <LinkList title="links" links={socialLinks} />
      <MyApps />
    </section>
  </Layout>;
}

// getStaticProps only runs server-side
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
