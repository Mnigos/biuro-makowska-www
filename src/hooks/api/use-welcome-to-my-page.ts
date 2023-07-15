import { useQuery } from '@tanstack/react-query'

import { WELCOME_TO_MY_PAGE } from '~/api/constants'
import { getWelcomeToMyPage } from '~/api/fetchers'

export const useWelcomeToMyPage = () =>
  useQuery([WELCOME_TO_MY_PAGE], getWelcomeToMyPage)
