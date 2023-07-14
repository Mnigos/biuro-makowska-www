import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import '~/styles/theme.css'
import '~/styles/global.css'

import type { AppProps } from 'next/app'

import { Layout, LayoutType } from '~/layouts'

export type PageProps = {
  layoutType: LayoutType
}

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  const { layoutType = LayoutType.DEFAULT } = pageProps

  return (
    <Layout type={layoutType}>
      <Component {...pageProps} />
    </Layout>
  )
}
