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
            and as a dad of 2 JeffCo students, I wanted to understand the budget better. So I
            compiled 20 years of data from JeffCo's Annual Comprehensive Financial Reports. Here are
            the headlines:
          </p>
          <ul className="text-xl">
            <li>
              Enrollment has declined by about 10K students in the last 20 years in JeffCo overall.
            </li>
            <li>
              Charter school enrollment has more than doubled over the last 20 years, and is still
              growing.
            </li>
            <li>
              In just the last 5 years, teacher count has dropped by 344, but admin personnel has
              gone up by 49.
            </li>
            <li>
              Over the last 10 years, special education spending has increased from 16% to 21% of
              the instruction budget.
            </li>
            <li>
              Over the last 10 years, the General Administration expense category has more than
              doubled from $25.5 million to $61 million.
            </li>
          </ul>
          <p>
            My data for this report is compiled in a{' '}
            <a
              href="https://docs.google.com/spreadsheets/d/1UKSAyTid9bnt_9dLHvFNYv0C9XsniD2D4yG7-DGq-ME/edit?usp=sharing"
              target="_blank"
            >
              {' '}
              google sheet
            </a>
            . For up-to-date reporting on the district, I encourage you to check out{' '}
            <a href="https://cotlns-newsletter-education.beehiiv.com/" target="_blank">
              Suzie Glassman's reporting
            </a>
            .
          </p>
          <DataStudioReport reportUrl={REPORT_URL} />
        </article>
      </section>
    </div>
  );
}
