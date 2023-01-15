import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import DateDisplay from '../components/date'

export default function Home({ allPostsData }: { allPostsData: any[]}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg">
        <p>I&rsquo;m Jamie Perkins, a senior software engineer specializing in frontend development.</p>
        <p>Check out my open source work on <a href="http://github.com/inorganik" >github</a>, view my <a href="https://www.linkedin.com/in/jamierperkins/" >linkedIn</a>, or follow me on twitter <a href="https://twitter.com/inorganik" title="Twitter">@inorganik</a>. You can also <a href="mailto:jamie@inorganik.net">email me</a>.</p>
      </section>

      <section className="mt-12">
        <h2>Blog</h2>
        <ul className="list-none m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-black/50">
                <DateDisplay dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
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

