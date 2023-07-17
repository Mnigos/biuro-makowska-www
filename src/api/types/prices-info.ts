import { BaseApiAttributes } from './base-api-attributes'
import { StrapiResponse } from './strapi-response'

export interface PricesInfo extends BaseApiAttributes {
  header: string
  warning: string
}

export type PricesInfoResponse = StrapiResponse<PricesInfo>
