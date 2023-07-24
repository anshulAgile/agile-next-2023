import { useEffect } from 'react'
import Layout from '@/components/Layout'
import { Providers } from '@/service/redux/Provider'
import { store } from '@/service/redux/store'
import '@/style/index.scss'
import { setupAxios } from '@/utils/functions'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    setupAxios(store)
  }, [])

  return <Providers>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Providers>
}
