import { LandingPage } from '../types'

export function instanceOfLandingPage(object: object): object is LandingPage {
  return 'content' in object
}
