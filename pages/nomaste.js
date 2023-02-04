import Head from "next/head";
import { useEffect } from "react";

export default function Nomaste() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nomaste');
  }, []);

  return (
    <div className="mb-6 mx-auto px-4 max-w-7xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="It's never been easier to figure out what's for dinner."
        />
        {/* this is being hosted on vercel, so we don't want to index it */}
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:image"
          content="https://inorganik.net/images/nomaste-site-preview.png"
        />
        <meta name="og:title" content="Nomaste - for Android and iOS" />
        <meta name="twitter:card" content="summary_large_image" />
        
      </Head>

      <main className="app h-screen">

      </main>
    </div>
  );
}