import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import Link from 'next/link';
import { GA_TRACKING_ID } from '../lib/ga';

const name = 'Jamie Perkins';
export const siteTitle = 'inorganik blog';
import Script from 'next/script'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
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
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-2T7D0VR4NW" />
        <Script strategy="lazyOnload">
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
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="text-4xl">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className="text-2xl">
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
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