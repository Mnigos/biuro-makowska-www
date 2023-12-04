import Image from 'next/image'
import { Fieldset } from 'primereact/fieldset'
import parse from 'html-react-parser'

import {
  biuroMakowskaOfficeInside,
  biuroMakowskaOfficeOutside,
  secondBiuroMakowskaOffice,
} from '~/assets/images'
import { ContactCard } from '~/components/contact'
import { ContactForm } from '~/components/contact/form'
import { useContact } from '~/hooks/api'

export default function Kontakt() {
  const { data } = useContact()

  return (
    <>
      <header>
        <h1 className="p-component text-5xl font-bold">Kontakt</h1>
      </header>

      <section className="flex flex-column md:flex-row gap-4 md:gap-8">
        <div className="w-10">
          <Image
            src={biuroMakowskaOfficeOutside}
            alt="Biuro Makowska's office outside"
            className="w-full h-auto border-round-lg shadow-6"
          />

          <Image
            src={biuroMakowskaOfficeInside}
            alt="Biuro Makowska's office inside"
            className="w-full h-auto border-round-lg shadow-6"
          />
        </div>

        <div className="flex flex-column justify-content-around gap-4 w-10">
          <Fieldset
            legend={<h3 className="text-2xl font-bold m-0">Siedziba</h3>}
          >
            <div className="flex flex-column align-items-center gap-4">
              <h2 className="m-0 py-2 text-xl">
                Biuro Rachunkowe Joanna Makowska
              </h2>
              <div className="flex justify-content-around w-full">
                <div className="flex gap-2 flex-column">
                  {parse(data?.siedziba_1 ?? '')}
                </div>
                <div className="flex gap-2 flex-column">
                  {parse(data?.siedziba_2 ?? '')}
                </div>
              </div>
            </div>
          </Fieldset>

          <div>
            <Image
              src={secondBiuroMakowskaOffice}
              alt="Biuro Makowska's office outside"
              className="w-full h-auto border-round-lg shadow-6"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-column md:flex-row justify-content-between align-items-stretch md:align-items-center md:flex-row gap-4 md:gap-8">
        <ContactCard />

        <ContactForm />
      </section>
    </>
  )
}
