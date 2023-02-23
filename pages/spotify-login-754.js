import Layout from '../components/layout';
import Head from 'next/head';


export default function Mixtool() {
  return <Layout>
    <Head>
      <title>Spotify login</title>
    </Head>

    <section className="prose mt-12 max-w-none">
      <article className="max-w-none">
        <h1>Spotify login</h1>
        <a href="api/spotify/login" className="btn btn-primary">Login</a>
      </article>
    </section>
  </Layout>;
}