import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import DateDisplay from '../components/date'
import Leaderline from '../components/leaderline'


export default function Home({ allPostsData }) {
  const links = [
    { href: 'http://github.com/inorganik', label: 'github' },
    { href: 'https://www.linkedin.com/in/jamierperkins/', label: 'linkedin' },
    { href: 'https://twitter.com/inorganik', label: '@inorganik' },
    { href: 'mailto:jamie@inorganik.net', label: 'email' },
  ];
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="max-w-none">
        <h1 className="text-2xl sm:text-4xl">I&rsquo;m Jamie Perkins, a senior software engineer specializing in frontend development.</h1>
      </section>
      <Leaderline className="my-6" />
      <section className="prose max-w-none grid sm:grid-cols-4 gap-4">
        <div className="col-span-3">
          <h4>Recent Blogs</h4>
          <ul className="list-none m-0 p-0">
            {allPostsData.map(({ id, date, title }) => (
              <li className="mb-5 pl-0" key={id}>
                <p className="text-xl mb-0">
                  <Link className="no-underline font-extralight" href={`/posts/${id}`}><span className="text-primary">→</span> {title}</Link>
                </p>
                <DateDisplay dateString={date} />
              </li>
            )).slice(0, 2)}
          </ul>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            {links.map(({ href, label }) => (
              <li key={label}>
                <a className="text-primary" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Projects</h4>
          <ul>
            <li>Nomaste</li>
            </ul>
        </div>
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

