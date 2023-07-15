import { adaptLandingPageResponse } from '../adapters'
import { strapiClient } from '../strapi-client'
import { LandingPageResponse } from '../types'

export function getWelcomeToMyPage() {
  return strapiClient
    .get<LandingPageResponse>('welcome-to-my-page', {
      params: {
        populate: '*',
      },
    })
    .then(({ data }) => adaptLandingPageResponse(data))
}
