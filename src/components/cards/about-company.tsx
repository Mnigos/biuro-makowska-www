import { Card } from 'primereact/card'
import ReactMarkdown from 'react-markdown'

import { useAboutCompany } from '~/hooks/api'
import { instanceOfLandingPage } from '~/api/utils'

export function AboutCompanyCard() {
  const { data } = useAboutCompany()

  if (!data || !instanceOfLandingPage(data)) return

  return (
    <Card title={data.header}>
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </Card>
  )
}
