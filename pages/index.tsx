import type { NextPage } from 'next'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg">
        <p>I&rsquo;m Jamie Perkins, a senior software engineer specializing in frontend development.</p>
        <p>Check out my open source work on <a href="http://github.com/inorganik" >github</a>, view my <a href="https://www.linkedin.com/in/jamierperkins/" >linkedIn</a>, or follow me on twitter <a href="https://twitter.com/inorganik" title="Twitter">@inorganik</a>. You can also <a href="mailto:jamie@inorganik.net">email me</a>.</p>
      </section>
    </Layout>
  )
}

export default Home
