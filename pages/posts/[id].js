import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import DateDisplay from '../../components/date';
import MyLinks from '../../components/my-links';
import MyApps from '../../components/my-apps';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>

    <section className="prose mt-12 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-6">
      <article className="col-span-2 sm:col-span-3 row-auto sm:row-span-3">
        <h1>{postData.title}</h1>
        <div className="text-current">
          <DateDisplay dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <MyLinks />
      <MyApps />
    </section>
  </Layout>;
}