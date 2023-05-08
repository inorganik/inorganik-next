import Layout from '../components/layout';
import Head from 'next/head';


export default function Mixtool() {
  const siteTitle = 'Dreamweaver color theme editor';
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
        <h1>Sorry, Dreamweaver color theme editor is no longer hosted here.</h1>
        <p>But you can find the code <a href="https://github.com/inorganik/dw-color-theme-editor">on GitHub</a>.</p>
      </article>
    </section>
  </Layout>;
}