import { adaptLandingPageResponse } from '../adapters'
import { strapiClient } from '../strapi-client'
import { LandingPageResponse } from '../types'

export function getAboutCompany() {
  return strapiClient
    .get<LandingPageResponse>('/about-company', {
      params: {
        populate: '*',
      },
    })
    .then(({ data }) => adaptLandingPageResponse(data))
}
