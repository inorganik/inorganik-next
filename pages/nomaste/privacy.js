import NomasteLayout from '../../components/layout-nomaste';
import Head from 'next/head';
import Link from 'next/link';

export default function NomastePrivacy() {
  return <NomasteLayout>
    <Head>
      <title>Nomaste Privacy Policy</title>
    </Head>
    <section className="my-7">
      <article className="prose mx-auto max-w-none sm:max-w-4xl">
        <h1>Nomaste Privacy Policy</h1>
        <hr />
        <p>This privacy policy explains how your information is handled by Nomaste.</p>

        <p>By using Nomaste or any of its services you consent to the use of your personal information as described in this document. Your personal information will not be used for any other purpose without your consent.</p>

        <h2>What we collect</h2>

        <h3>Your email</h3>

        <p>Nomaste collects your email address in order to create an account. The reason we require you to create an account is so that your data can be protected by authenticated access, and easily retrieved by you and your group members on multiple devices.</p>

        <p>Your email or usage stats will not be sold to any third-party.</p>

        <h3>The content you create</h3>

        <p>When you create recipes, meal plans, and tags, that information is stored in a database so it can be persisted, queried and retrieved for your convenience.</p>

        <p>This information is private by default. If you choose to share a dinner recipe, the accompanying text and images can be viewed and copied by your followers.</p>

        <h2>How information is protected</h2>
        <ul>
          <li>Nomaste does not ask for or store any data that is not needed.</li>
          <li>Nomaste properties are configured to use HTTPS, meaning all data is encrypted in transit.</li>
          <li>Our infrastructure uses industry best practices for storing and securing sensitive information.</li>
        </ul>

        <h2>Removing your information from Nomaste</h2>

        <p>You may choose to delete your data and account from Nomaste at any time. Assets like image files may not be deleted from their URLs immediately.</p>

        <p>
          <Link href="/nomaste">← Back to Nomaste</Link>
        </p>
      </article>
    </section>
  </NomasteLayout>;
}