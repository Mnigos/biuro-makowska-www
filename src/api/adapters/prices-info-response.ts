import { PricesInfoResponse, PricesInfo } from '../types'

export const adaptPricesInfoResponse = ({
  data: { attributes },
}: PricesInfoResponse): PricesInfo => attributes
