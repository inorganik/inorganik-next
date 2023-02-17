import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { socialLinks, projects, githubLinks } from '../lib/static-content'
import Link from 'next/link'
import DateDisplay from '../components/date'
import Leaderline from '../components/leaderline'
import LinkList from '../components/link-list'
import MyApps from '../components/my-apps'
import ProjectCard from '../components/project-card'
import Subhead from '../components/subhead'
import MusicFavs from '../components/music-favs'

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

      <section className="prose mt-12 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-12">
        <div className="col-span-2 sm:col-span-3 row-auto sm:row-span-5">

          <Subhead title="Latest cold takes" />
          <ul className="list-none p-0 mb-12">
            {allPostsData.map(({ id, date, title }) => (
              <li className="mb-5 pl-0" key={id}>
                <p className="text-2xl mb-0">
                  <Link className="hover-glow no-underline font-extralight" href={`/posts/${id}`}><span className="text-primary">→</span> {title}</Link>
                </p>
                <DateDisplay dateString={date} />
              </li>
            )).slice(0, 4)}
          </ul>
                    
          <Subhead title="Past projects" />
          <div className="divide-y divide-neutral divide-dotted mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.label} {...project} />
            ))}
          </div>

        </div>
        <LinkList title="Links" links={socialLinks} />
        <MyApps />
        <LinkList title="Open source" links={githubLinks} />
        {/* <MusicFavs /> */}
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

