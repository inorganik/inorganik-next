import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import DateDisplay from '../../components/date'
import LinkList from '../../components/link-list'
import MyApps from '../../components/my-apps'
import { socialLinks } from '../../lib/static-content'

/**
 * When you export a function called getStaticPaths (Static Site Generation)
 * from a page that uses dynamic routes, Next.js will statically pre-render 
 * all the paths specified by getStaticPaths.
 */
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
/** 
 * If you export a function called getStaticProps (Static Site Generation),
 * Next.js will pre-render this page at build time using the props returned 
 * by getStaticProps.
 */
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const ids = getAllPostIds().map(data => data.params.id);
  const index = ids.indexOf(params.id);
  const prevId = ids[index - 1] || null;
  const nextId = ids[index + 1] || null;
  return {
    props: {
      postData,
      prevId,
      nextId,
    },
  };
}
/**
 * If you export a function called getServerSideProps (Server-Side Rendering)
 * from a page, Next.js will pre-render this page on each request using the 
 * data returned by getServerSideProps. (Not used here)
 */

export default function Post({ postData, prevId, nextId }) {
  return <Layout>
    <Head>
      <title>Post: {postData.title}</title>
    </Head>

    <section className="prose mt-12 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-12">
      <article className="col-span-2 sm:col-span-3 row-auto sm:row-span-3 flex flex-col">
        <h1>{postData.title}</h1>
        <div className="text-current">
          <DateDisplay dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <LinkList title="Links" links={socialLinks} />
      <MyApps />

      <div className="col-span-2 sm:col-span-3 mt-12 flex justify-between">
        { prevId && <Link href={`/posts/${prevId}`}>← Previous post</Link> }
        <span className="flex-grow"></span>
        { nextId && <Link href={`/posts/${nextId}`}>Next post →</Link> }
      </div>
    </section>

  </Layout>;
}