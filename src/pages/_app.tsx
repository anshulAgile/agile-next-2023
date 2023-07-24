import localFont from 'next/font/local'
import { useEffect } from 'react'
import Layout from '@/components/Layout'
import { Providers } from '@/service/redux/Provider'
import { store } from '@/service/redux/store'
import { setupAxios } from '@/utils/functions'
import type { AppProps } from 'next/app'
import '@/style/index.scss'

const Bondrians = localFont({ src: '../assets/fonts/Bondrians.ttf' })

export default function App({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    setupAxios(store)
  }, [])

  return <Providers>
    <div style={Bondrians.style}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  </Providers>
}
