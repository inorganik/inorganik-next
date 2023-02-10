import Layout from '../components/layout'
import Head from 'next/head'
import LinkList from '../components/link-list'
import MyApps from '../components/my-apps'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import DateDisplay from '../components/date'
import { socialLinks } from '../lib/utils'


export default function AllPosts({ allPostsData }) {
  return <Layout>
    <Head>
      <title>All posts</title>
    </Head>
    <section className="prose mt-12 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="col-span-2 sm:col-span-3 row-auto sm:row-span-2">
        <h1>All posts</h1>
        <ul className="list-none m-0 p-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5 pl-0" key={id}>
              <p className="text-xl mb-0">
                <Link className="hover-glow no-underline font-extralight" href={`/posts/${id}`}><span className="text-primary">→</span> {title}</Link>
              </p>
              <DateDisplay dateString={date} />
            </li>
          ))}
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
