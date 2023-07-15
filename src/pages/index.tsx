import { GetStaticProps } from 'next'
import Image from 'next/image'
import { QueryClient, dehydrate } from '@tanstack/react-query'

import { PageProps } from './_app'

import { biuroMakowskaLogo, kibrLogo } from '~/assets/images'
import { LayoutType } from '~/layouts'
import { getAboutCompany, getContact, getWelcomeToMyPage } from '~/api/fetchers'
import {
  AboutCompanyCard,
  ContactCard,
  WelcomeToMyPageCard,
} from '~/components/cards'
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
  getContact()

  return (
    <>
      <section className="flex flex-column lg:flex-row md:justify-content-around align-items-center min-h-screen">
        <Image
          src={biuroMakowskaLogo}
          alt="Biuro Makowska's logo"
          style={{ objectFit: 'contain', backdropFilter: 'blur(2px)' }}
          className="max-w-full border-round-lg"
        />

        <WelcomeToMyPageCard />
      </section>

      <section className="flex flex-column lg:flex-row justify-content-around align-items-center gap-4">
        <AboutCompanyCard />

        <Image
          src={kibrLogo}
          alt="Kibr's logo"
          style={{ objectFit: 'contain' }}
          className="w-full md:w-4 lg:w-4"
        />
      </section>

      <section className="flex flex-column lg:flex-row justify-content-around align-items-center gap-4">
        <ContactCard />
      </section>
    </>
  )
}
