import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import { supportMailLink } from '../../lib/utils';

export default function GhostAr() {
  
  useEffect(() => {
    initFlickity();
    document.documentElement.setAttribute('data-theme', 'ghostAr');
    return () => {
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const carousel = useRef(null);

  async function initFlickity() {
    if (typeof window !== 'undefined' && carousel.current) {
      const Flickity = (await import('flickity')).default;
      new Flickity(carousel.current, {
        lazyLoad: true,
        wrapAround: true,
        autoPlay: true,
      });
    }
  }

  return (
    <div className="mb-6 mx-auto px-4 w-full sm:max-w-7xl">

      <Head>
        <title>Ghost AR for iOS</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="An augmented reality app for iOS that lets you see ghosts."
        />
        {/* this is being hosted on vercel, so we don't want to index it yet */}
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:image"
          content="https://inorganik.net/images/ghost-ar/ghost-ar-site-preview.png"
        />
        <meta name="og:title" content="Ghost AR for iOS" />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>

      <main className="app">
        <section className="lg:h-[90vh] items-center grid lg:grid-cols-2 lg:min-h-[800px]">
          <div>
            <Image src="/images/ghost-ar/ghost-ar-on-black.png" width={522} height={522} priority className="mx-auto mt-10 mb-6 lg:mt-0 sm:mb-14" alt="Ghost AR" />

            <div className="my-4 sm:my-8 py-7 flex justify-center">
              <a className="mx-4" href="https://apps.apple.com/us/app/ghost-ar-live-action-ghosts/id1591628036"><img src="../images/app-store-badge.svg" className="w-auto h-16" alt="Download on the App Store" /></a>
            </div>

            <div className="text-center">
              <p className="my-4">An augmented reality app brought to you by <Link className="underline" href="/">Inorganik Produce</Link>.</p>
            </div>
          </div>

          <div className="max-h-screen">
            <div className="w-full h-[600px] sm:w-[400px] sm:h-auto mx-auto relative" ref={carousel}>
							<div>
								<img alt="Encounter 4 unique live-action ghosts" src="/images/ghost-ar/app-store-1-5.5.jpg" />
							</div>
							<div>
								<img alt="Capture realistic ghost photos" src="/images/ghost-ar/app-store-2-5.5.jpg" />
							</div>
						</div>
          </div>
        </section>

        <section>
          <p className="text-center">Questions or comments? Please <a className="underline" href={supportMailLink}>email support</a>.</p>
        </section>
      </main>
    </div>
  );
}