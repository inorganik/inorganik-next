import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Circuitree from './circuitree';

export const siteTitle = 'inorganik blog';
import Leaderline from './leaderline';

export default function Layout({ children, home }) {
  return (
    <div className="mb-6 mx-auto px-4 max-w-4xl 2xl:max-w-none">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The personal blog of Jamie Perkins"
        />
        {/* this is being hosted on vercel, so we don't want to index it */}
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        
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