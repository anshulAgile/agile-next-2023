import Layout from '@/components/Layout'
import { Providers } from '@/service/redux/Provider'
import { store } from '@/service/redux/store'
import '@/style/index.scss'
import { setupAxios } from '@/utils/functions'
import type { AppProps } from 'next/app'

console.log('hiiii');
if (typeof window !== undefined) {
  setTimeout(() => {
    setupAxios(store)
  }, 200);
}

export default function App({ Component, pageProps, router }: AppProps) {
  return <Providers>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Providers>
}
