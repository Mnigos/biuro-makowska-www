import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import '~/styles/theme.css'
import '~/styles/global.css'

import type { AppProps } from 'next/app'
import { useState } from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Head from 'next/head'

import { Layout, LayoutType } from '~/layouts'

export type PageProps = {
  layoutType?: LayoutType
  dehydratedState?: unknown
}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const [queryClient] = useState(() => new QueryClient())

  const { layoutType = LayoutType.DEFAULT, dehydratedState } = pageProps

  return (
    <>
      <Head>
        <title>Biuro Makowska</title>

        <meta
          name="description"
          content="Proponuję Państwu profesjonalne usługi księgowe w atrakcyjnych cenach z możliwością odbioru dokumentów od klienta."
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#0e1315" />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9400d5" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Layout type={layoutType}>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
