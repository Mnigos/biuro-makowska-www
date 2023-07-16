import { useQuery } from '@tanstack/react-query'

import { PRICES_CARDS } from '~/api/constants'
import { getPricesCards } from '~/api/fetchers'

export const usePricesCards = () => useQuery([PRICES_CARDS], getPricesCards)
