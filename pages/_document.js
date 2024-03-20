import { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'inorganik produce, inc 👾';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm Jamie Perkins. Software engineer, bootstrapper and dedicated dad."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://inorganik.net/images/inorganik-produce-preview.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}