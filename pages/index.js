import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import DateDisplay from '../components/date'
import Leaderline from '../components/leaderline'
import MyLinks from '../components/my-links';
import MyApps from '../components/my-apps';
import ProjectCard from '../components/project-card'

export default function Home({ allPostsData }) {
  const projects = [
    {
      link: 'https://pod.fan',
      imageUrl: '/images/project-podfan.png',
      label: 'Podfan',
      description: 'Podfan is a private podcasting platform I bootstrapped and launched in September of 2019. Podcasts can accept recurring donations and offer paid podcasts with 1-click subscribe for listeners. I sold the project on Microns in September of 2021. It has since been redesigned.',
    },
    {
      link: 'https://inorganik.github.io/mapover',
      imageUrl: '/images/project-mapover.png',
      label: 'Mapover',
      description: 'Overlay 2 locations with minimalistic maps. Not only does it create interesting visuals, but it provides an often surprising size comparison.',
    }
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

      <section className="prose mt-12 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="col-span-2 sm:col-span-3 row-auto sm:row-span-4">
          <h4 className="mt-0">Latest posts</h4>
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
          <p className="mt-6">
            <Link href="/all-posts">All posts</Link>
          </p>

          <h4 className="mt-12">Past projects</h4>
          <div className="divide-y">
            {projects.map((project) => (
              <ProjectCard key={project.label} {...project} />
            ))}
          </div>

        </div>
        <MyLinks />
        <MyApps />
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

