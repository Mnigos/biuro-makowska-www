import { GetStaticProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import { PageProps } from './_app'

import { usePricesCards } from '~/hooks/api'
import { getPricesCards, getPricesInfo } from '~/api/fetchers'
import { PRICES_CARDS, PRICES_INFO } from '~/api/constants'
import { PricesInfo, PricesTable } from '~/components/prices'

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([PRICES_CARDS], getPricesCards)
  await queryClient.prefetchQuery([PRICES_INFO], getPricesInfo)

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
      <header>
        <h1 className="p-component text-5xl font-bold">Cennik</h1>

        <PricesInfo />
      </header>

      <PricesTable pricesCards={data} />
    </>
  )
}
