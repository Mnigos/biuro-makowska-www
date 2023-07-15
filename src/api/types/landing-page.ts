import { BaseApiAttributes } from './base-api-attributes'
import { StrapiResponse } from './strapi-response'

export interface LandingPageData {
  id: number
  header: string
  content: string
}

export type LandingPageResponse = StrapiResponse<
  {
    data: LandingPageData
  } & BaseApiAttributes
>

export type LandingPage = BaseApiAttributes & LandingPageData
