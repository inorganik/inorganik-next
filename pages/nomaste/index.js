import Image from 'next/image';
import Link from 'next/link';
import NomasteLayout from '../../components/layout-nomaste';
import { supportMailLink } from '../../lib/static-content';

export default function Nomaste() {

  return <NomasteLayout>
    <section className="lg:h-[90vh] items-center grid lg:grid-cols-2 lg:min-h-[800px]">
      <div>
        <Image src="/images/nomaste/nomaste-logo-for-splash.svg" width={522} height={168} priority className="mx-auto mt-10 mb-6 lg:mt-0 sm:mb-14" alt="Nomaste" />

        <div className="my-4 sm:my-8 py-7 flex justify-center">
          <a className="mx-4" href="https://apps.apple.com/us/app/nomaste-plan-share-dinners/id1594680305"><img src="../images/app-store-badge.svg" className="w-auto h-16" alt="Download on the App Store" /></a>
          <a className="mx-4" href="https://play.google.com/store/apps/details?id=inorganik.nomaste"><img src="../images/play-store-badge.svg" className="w-auto h-16" alt="Download on the Play Store" /></a>
        </div>

        <div className="text-center">
          <p className="my-4 text-3xl">It&rsquo;s never been easier to figure out what&rsquo;s for dinner.</p>
          <p className="my-4">The easiest way to plan meals with your partner. For Android, iOS and <a className="underline" href="https://nomaste.inorganik.net" target="_blank">online</a>.</p>
          <p className="my-4">Brought to you by <Link className="underline" href="/">Inorganik Produce</Link>.</p>
        </div>
      </div>

      <div>
        <div className="relative h-[560px] w-[350px] sm:w-[580px] sm:h-[810px] lg:w-full m-auto">
          <Image src="/images/nomaste/Nomaste-on-Android-mock-2.png" width={405} height={799} alt="Nomaste on Android"
            className="absolute w-[250px] sm:w-[405px] z-40" />
          <Image src="/images/nomaste/Nomaste-on-iPhone-mock-2.png" width={400} height={770} alt="Nomaste on iPhone"
            className="absolute top-[40px] left-[98px] w-[250px] md:left-[200px] md:w-[400px] z-50" />
        </div>
      </div>
    </section>

    <section>
      <p className="text-center">Questions or comments? Please <a className="underline" href={supportMailLink}>email support</a>.<br />
        <Link className="underline" href="/nomaste/privacy">Privacy policy</Link>
      </p>
    </section>
  </NomasteLayout>
}