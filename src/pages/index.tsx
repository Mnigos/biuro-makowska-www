import { GetStaticProps } from 'next'
import Image from 'next/image'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import { PageProps } from './_app'

import { biuroMakowskaLogo, kibrLogo } from '~/assets/images'
import { LayoutType } from '~/layouts'
import { getAboutCompany, getWelcomeToMyPage } from '~/api/fetchers'
import { AboutCompanyCard, WelcomeToMyPageCard } from '~/components/cards'
import { ABOUT_COMPANY, WELCOME_TO_MY_PAGE } from '~/api/constants'

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([ABOUT_COMPANY], () => getAboutCompany())
  await queryClient.prefetchQuery([WELCOME_TO_MY_PAGE], () =>
    getWelcomeToMyPage()
  )

  return {
    props: {
      layoutType: LayoutType.LANDING,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  return (
    <>
      <div
        className="flex flex-column lg:flex-row md:justify-content-around lg:justify-content-between align-items-center"
        style={{ minHeight: '70vh' }}
      >
        <Image
          src={biuroMakowskaLogo}
          alt="Biuro Makowska's logo"
          style={{ objectFit: 'contain' }}
          className="max-w-full"
        />

        <WelcomeToMyPageCard />
      </div>

      <div className="flex flex-column lg:flex-row justify-content-between align-items-center gap-4">
        <AboutCompanyCard />

        <Image
          src={kibrLogo}
          alt="Kibr's logo"
          style={{ objectFit: 'contain' }}
          className="w-full md:w-4 lg:w-4"
        />
      </div>
    </>
  )
}
