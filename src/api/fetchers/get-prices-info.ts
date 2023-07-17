import { adaptPricesInfoResponse } from '../adapters'
import { strapiClient } from '../strapi-client'
import { PricesInfoResponse } from '../types'

export function getPricesInfo() {
  return strapiClient
    .get<PricesInfoResponse>('/prices-info')
    .then(({ data }) => adaptPricesInfoResponse(data))
}
