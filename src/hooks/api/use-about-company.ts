import { useQuery } from '@tanstack/react-query'

import { ABOUT_COMPANY } from '~/api/constants'
import { getAboutCompany } from '~/api/fetchers'

export const useAboutCompany = () => useQuery([ABOUT_COMPANY], getAboutCompany)
