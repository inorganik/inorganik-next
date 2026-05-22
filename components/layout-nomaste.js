import Head from 'next/head';
import { useEffect } from 'react';

export default function NomasteLayout({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nomaste');
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className="mb-6 mx-auto px-4 w-full sm:max-w-7xl">
      <Head>
        <title>Nomaste - for Android and iOS</title>
        <meta
          name="description"
          content="It's never been easier to figure out what's for dinner."
          key="description"
        />
        <meta property="og:title" content="Nomaste - for Android and iOS" key="og:title" />
        <meta
          property="og:image"
          content="https://inorganik.net/images/nomaste/nomaste-site-preview.jpg"
          key="og:image"
        />
      </Head>

      <main className="app">{children}</main>
    </div>
  );
}
