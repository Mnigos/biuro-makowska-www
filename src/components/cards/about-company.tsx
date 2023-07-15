import { Card } from 'primereact/card'
import ReactMarkdown from 'react-markdown'

import { cardPassThrough } from '.'

import { useAboutCompany } from '~/hooks/api'
import { instanceOfLandingPage } from '~/api/utils'

export function AboutCompanyCard() {
  const { data } = useAboutCompany()

  if (!data || !instanceOfLandingPage(data)) return null

  return (
    <Card title={data.header} pt={cardPassThrough} className="lg:w-6">
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </Card>
  )
}
