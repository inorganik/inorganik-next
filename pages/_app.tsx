import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

import 'prismjs/themes/prism-tomorrow.min.css';
import { defaultDescription, defaultOgImage, siteTitle } from '../lib/seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content={defaultDescription} key="description" />
        <meta property="og:title" content={siteTitle} key="og:title" />
        <meta property="og:image" content={defaultOgImage} key="og:image" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      </Head>
      <Component {...pageProps} />
      <Analytics debug={false} />
    </>
  );
}

export default MyApp;
