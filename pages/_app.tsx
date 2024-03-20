import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import 'prismjs/themes/prism-tomorrow.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <> 
      <Component {...pageProps} />
      <Analytics debug={false} />
    </>
  );
}

export default MyApp
