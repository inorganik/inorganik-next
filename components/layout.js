import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Circuitree from './circuitree';
import { GA_TRACKING_ID } from '../lib/ga';

export const siteTitle = 'inorganik blog';
import Script from 'next/script'
import Leaderline from './leaderline';

export default function Layout({ children, home }) {
  return (
    <div className="mb-6 mx-auto px-4 max-w-4xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The personal blog of Jamie Perkins"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* google analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-2T7D0VR4NW" />
        <Script strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${GA_TRACKING_ID}, {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Leaderline className="my-6" />
            <Circuitree />
          </>
        ) : ''}
        <div className={ (home ? '' : 'mt-6') + ' w-full relative' }>
          <Link href="/">
            <Image src="/images/inorganik-produce.svg" width={259} height={63} priority className="absolute right-0 bottom-[4px] bg-base-100 pl-[10px]" alt="Inorganik Produce" />
          </Link>
          <Leaderline className="my-6" />
        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}