import { GetStaticProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import { PageProps } from './_app'

import { usePricesCards } from '~/hooks/api'
import { getPricesCards } from '~/api/fetchers'
import { PRICES_CARDS } from '~/api/constants'
import { PricesTable } from '~/components/prices'

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([PRICES_CARDS], getPricesCards)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Cennik() {
  const { data } = usePricesCards()

  if (!data) return null

  return (
    <>
      <h1 className="p-component text-5xl font-bold">Cennik</h1>

      <PricesTable pricesCards={data} />
    </>
  )
}
