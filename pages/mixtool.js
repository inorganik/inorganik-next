import Layout from '../components/layout';
import Head from 'next/head';


export default function Mixtool() {
  return <Layout>
    <Head>
      <title>Mixtool has moved</title>
    </Head>

    <section className="prose mt-12 max-w-none">
      <article className="max-w-none">
        <h1>Mixtool has moved</h1>
        <a href="https://inorganik.github.io/mixtool/" className="btn btn-primary">Visit mixtool</a>
      </article>
    </section>
  </Layout>;
}