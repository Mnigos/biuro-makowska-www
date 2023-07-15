import { LandingPage, LandingPageResponse } from '../types'

export const adaptLandingPageResponse = ({
  data: {
    attributes: { data, ...rest },
  },
}: LandingPageResponse): LandingPage => {
  return {
    ...rest,
    ...data,
  }
}
