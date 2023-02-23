import Head from 'next/head';
import { useEffect } from 'react';

export default function NomasteLayout({ children }) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nomaste');
    return () => {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  return (
    <div className="mb-6 mx-auto px-4 w-full sm:max-w-7xl">

      <Head>
        <title>Nomaste - for Android and iOS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="It's never been easier to figure out what's for dinner."
        />
        {/* this is being hosted on vercel, so we don't want to index it yet */}
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://inorganik.net/images/nomaste/nomaste-site-preview.png"
        />
        <meta name="og:title" content="Nomaste - for Android and iOS" />
        <meta name="twitter:card" content="summary_large_image" />        
      </Head>

      <main className="app">{children}</main>
    </div>
  );
}
