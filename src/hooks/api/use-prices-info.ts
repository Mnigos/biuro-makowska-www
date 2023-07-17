import { useQuery } from '@tanstack/react-query'

import { PRICES_INFO } from '~/api/constants'
import { getPricesInfo } from '~/api/fetchers'

export const usePricesInfo = () => useQuery([PRICES_INFO], getPricesInfo)
