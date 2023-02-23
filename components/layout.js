import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Circuitree from './circuitree';

export const siteTitle = 'inorganik produce, inc 👾';
import Leaderline from './leaderline';

export default function Layout({ children, home }) {
  return (
    <div className="mb-6 mx-auto px-4 max-w-4xl relative">

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm Jamie Perkins, a senior software engineer specializing in frontend development."
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

      <footer className="footer items-center opacity-60 py-6 mt-12 text-secondary">
        <p>{ new Date().getFullYear() } &copy; inorganik produce, inc.</p>
      </footer>
    </div>
  );
}