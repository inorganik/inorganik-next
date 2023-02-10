import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { socialLinks, projects, githubLinks } from '../lib/utils'
import Link from 'next/link'
import DateDisplay from '../components/date'
import Leaderline from '../components/leaderline'
import LinkList from '../components/link-list'
import MyApps from '../components/my-apps'
import ProjectCard from '../components/project-card'
import Subhead from '../components/subhead'

export default function Home({ allPostsData }) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="max-w-none">
        <h1 className="text-2xl sm:text-4xl">I&rsquo;m Jamie Perkins, a senior software engineer specializing in frontend development.</h1>
      </section>

      <Leaderline className="my-6" />

      <section className="prose mt-12 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="col-span-2 sm:col-span-3 row-auto sm:row-span-4">
          
          <Subhead title="Past projects" />
          <div className="divide-y divide-neutral divide-dotted mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.label} {...project} />
            ))}
          </div>

          <Subhead title="Latest posts" />
          <ul className="list-none m-0 p-0">
            {allPostsData.map(({ id, date, title }) => (
              <li className="mb-5 pl-0" key={id}>
                <p className="text-xl mb-0">
                  <Link className="hover-glow no-underline font-extralight" href={`/posts/${id}`}><span className="text-primary">→</span> {title}</Link>
                </p>
                <DateDisplay dateString={date} />
              </li>
            )).slice(0, 4)}
          </ul>

        </div>
        <LinkList title="Links" links={socialLinks} />
        <MyApps />
        <LinkList title="Open source" links={githubLinks} />
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

