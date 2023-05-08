import Layout from '../components/layout';
import Head from 'next/head';


export default function Mixtool() {
  const siteTitle = 'Mixtool has moved';
  return <Layout>
    <Head>
      <title>{siteTitle}</title>
      <meta
        property="og:image"
        content="https://inorganik.net/images/inorganik-produce-preview.png"
      />
      <meta name="og:title" content={siteTitle} />
    </Head>

    <section className="prose mt-12 max-w-none">
      <article className="max-w-none">
        <h1>Mixtool has moved</h1>
        <a href="https://inorganik.github.io/mixtool/" className="btn btn-primary">Visit mixtool</a>
      </article>
    </section>
  </Layout>;
}