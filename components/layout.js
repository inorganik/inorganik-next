import Image from 'next/image';
import Link from 'next/link';
import Circuitree from './circuitree';
import Leaderline from './leaderline';

export default function Layout({ children, home }) {
  return (
    <div className="mb-6 mx-auto px-4 max-w-4xl relative flex flex-col min-h-full">

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

      <main className="flex flex-col flex-grow">{children}</main>

      <footer className="footer items-center opacity-60 py-6 mt-12 text-secondary">
        <p>{ new Date().getFullYear() } &copy; inorganik produce, inc.</p>
      </footer>
    </div>
  );
}