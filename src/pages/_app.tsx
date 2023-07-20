import Layout from '@/components/Layout'
import { Providers } from '@/service/redux/Provider'
import '@/style/index.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  return <Providers>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Providers>
}
