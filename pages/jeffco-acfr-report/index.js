import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DataStudioReport from '../../components/data-studio-report';
import DateDisplay from '../../components/date';
import Leaderline from '../../components/leaderline';

const REPORT_URL =
  'https://datastudio.google.com/embed/reporting/7c646da3-c683-4ad9-9471-77c4c0cfc950/page/e96xF';

export default function JeffcoAcfrReport() {
  return (
    <div className="mb-6 mx-auto px-4 max-w-6xl relative flex flex-col min-h-full">
      <Head>
        <title>20 years of JeffCo ACFR Data</title>
        <meta name="description" content="JeffCo ACFR data from 2006-2025" />
        <meta name="og:title" content="20 years of JeffCo ACFR Data" />
      </Head>

      <header className="flex flex-col items-center">
        <div className="mt-6 w-full relative">
          <Link href="/">
            <Image
              src="/images/inorganik-produce.svg"
              width={259}
              height={63}
              priority
              className="absolute right-0 bottom-[4px] bg-base-100 pl-[10px]"
              alt="Inorganik Produce"
            />
          </Link>
          <Leaderline className="my-6" />
        </div>
      </header>

      <section className="prose mt-12 max-w-none">
        <article className="max-w-none flex flex-col">
          <h1>20 years of JeffCo ACFR Data</h1>
          <div className="text-current">
            <DateDisplay dateString="2026-05-21" />
          </div>
          <p>
            JeffCo public schools is facing a{' '}
            <a
              href="https://cotlns-newsletter-education.beehiiv.com/p/what-jeffco-s-deepening-deficit-means-for-november"
              target="_blank"
            >
              $68 million budget shortfall
            </a>{' '}
            and as a father of 2 JeffCo students, I wanted to understand the budget better. So I
            compiled 20 years of data from JeffCo's Annual Comprehensive Financial Reports. Here are
            the headlines:
          </p>
          <ul></ul>
          <p>
            <a
              href="https://docs.google.com/spreadsheets/d/1UKSAyTid9bnt_9dLHvFNYv0C9XsniD2D4yG7-DGq-ME/edit?usp=sharing"
              target="_blank"
            >
              You can find the google sheet driving this data here.
            </a>
          </p>
          <DataStudioReport reportUrl={REPORT_URL} />
        </article>
      </section>
    </div>
  );
}
