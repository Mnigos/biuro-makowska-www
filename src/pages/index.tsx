import { GetStaticProps } from 'next'
import Image from 'next/image'
import { Card } from 'primereact/card'

import { PageProps } from './_app'

import { biuroMakowskaLogo, kibrLogo } from '~/assets/images'
import { LayoutType } from '~/layouts'

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
  props: {
    layoutType: LayoutType.LANDING,
  },
})

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

        <Card title="Witam na mojej stronie" className="lg:w-5">
          <p>
            Proponuję Państwu profesjonalne usługi księgowe w atrakcyjnych
            cenach z możliwością odbioru dokumentów od klienta.
          </p>

          <p> Posiadam:</p>
          <ul>
            <li>wieloletnie doświadczenie w obsłudze księgowej firm</li>
            <li>ubezpieczenie w zakresie odpowiedzialności cywilnej</li>
            <li>licencję Ministra Finansów</li>
          </ul>
        </Card>
      </div>

      <div className="flex flex-column lg:flex-row justify-content-between align-items-center gap-4">
        <Card title="O Firmie" className="lg:w-12 xl:w-8">
          <p>
            Biuro Rachunkowe Joanna Makowska to certyfikowane biuro, które
            zapewnia swoim klientom profesjonalną obsługę oraz rzetelne i
            fachowe świadczenie usług księgowych.
          </p>

          <p>
            Wieloletnia praca zawodowa, nabyta wiedza teoretyczna i praktyczna
            oraz umiejętności jej wykorzystania to dowód na rzetelną realizację
            usług.
          </p>

          <p>
            Działalność biura rachunkowego to dziś istotna pomoc dla wielu
            przedsiębiorców. Chcemy wychodzić naprzeciw wymaganiom i
            oczekiwaniom, które pojawiają się ze strony przedsiębiorców, dlatego
            oferujemy szeroki zakres usług księgowych i kadrowych w ramach
            prowadzenia KPiR, ksiąg rachunkowych, obsługi płac pracowniczych,
            deklaracji podatkowych, ZUS, kontaktów z Urzędem Skarbowy, rozliczeń
            rocznych PIT oraz pomocy przy działalności gospodarczej.
          </p>

          <p>
            Świadczone przez nas usługi księgowe i kadrowe realizujemy na
            podstawie certyfikatu księgowego wydanego przez Ministra Finansów nr
            26183/01. Posiadamy obowiązkowe i dodatkowe ubezpieczenie OC.
          </p>

          <p>
            Jednocześnie stale poszerzamy swoją merytoryczną wiedzę uczestnicząc
            na bieżąco w organizowanych szkoleniach, chociażby w
            Stowarzyszeniach Księgowych w Polsce. Serdecznie zapraszamy Państwa
            do skorzystania z naszych kompleksowych i elastycznie dopasowanych
            do Państwa potrzeb usług.
          </p>
        </Card>

        <div className="flex justify-content-center">
          <Image
            src={kibrLogo}
            alt="Kibr's logo"
            style={{ objectFit: 'contain' }}
            className="w-full md:w-4 lg:w-8"
          />
        </div>
      </div>
    </>
  )
}
