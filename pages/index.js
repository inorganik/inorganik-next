import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { socialLinks, projects, githubLinks } from '../lib/static-content'
import Leaderline from '../components/leaderline'
import LinkList from '../components/link-list'
import MyApps from '../components/my-apps'
import ProjectCard from '../components/project-card'
import Subhead from '../components/subhead'
import PostList from '../components/post-list'

export default function Home({ allPostsData }) {
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="max-w-none">
        <h1 className="text-2xl sm:text-4xl">I&rsquo;m Jamie Perkins, a senior software engineer specializing in web development.</h1>
      </section>

      <Leaderline className="my-6" />

      <section className="prose sm:mt-8 max-w-none grid grid-cols-2 sm:grid-cols-4 gap-12">
        <div className="col-span-2 sm:col-span-3 row-auto sm:row-span-5">

          <Subhead title="Latest cold takes" />
          <PostList allPostsData={allPostsData} limit={3} />
                    
          <Subhead title="Past projects" />
          <div className="divide-y divide-neutral divide-dotted mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.label} {...project} />
            ))}

            {/* Mailchimp Signup Form */}
            <div id="mc_embed_signup">
              <p className="sm:text-xl font-light"><strong>What&rsquo;s next?</strong> Get updates about what I&rsquo;m working on:</p>
              <form className="flex" action="https://inorganik.us6.list-manage.com/subscribe/post?u=652faf8fd19848d965f2d07dd&amp;id=d5900362dc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <input type="email" name="EMAIL" placeholder="Email" className="input input-sm input-bordered rounded-lg flex-grow max-w-xs" id="mce-EMAIL" />
                <input type="submit" defaultValue="submit" name="subscribe" className="btn btn-sm btn-primary rounded-lg ml-3" id="mc-embedded-subscribe" />
                {/* this prevents bot signups */}
                <div className="absolute left-[-5000px]" aria-hidden="true">
                  <input type="text" name="b_652faf8fd19848d965f2d07dd_d5900362dc" tabIndex="-1" defaultValue="" />
                </div>
              </form>
            </div>
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

