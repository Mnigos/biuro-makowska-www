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

import { Layout, LayoutType } from '~/layouts'

export type PageProps = {
  layoutType?: LayoutType
  dehydratedState?: unknown
}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const [queryClient] = useState(() => new QueryClient())

  const { layoutType = LayoutType.DEFAULT, dehydratedState } = pageProps

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <Layout type={layoutType}>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
