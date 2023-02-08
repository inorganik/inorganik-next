import Layout from '../components/layout';
import Head from 'next/head';


export default function Mixtool() {
  return <Layout>
    <Head>
      <title>Dreamweaver color theme editor</title>
    </Head>

    <section className="prose mt-12 max-w-none">
      <article className="max-w-none">
        <h1>Sorry, Dreamweaver color theme editor is no longer hosted here.</h1>
        <p>But you can find the code <a href="https://github.com/inorganik/dw-color-theme-editor">on GitHub</a>.</p>
      </article>
    </section>
  </Layout>;
}