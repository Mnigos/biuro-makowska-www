import { Card } from 'primereact/card'
import ReactMarkdown from 'react-markdown'

import { cardPassThrough } from '.'

import { instanceOfLandingPage } from '~/api/utils'
import { useWelcomeToMyPage } from '~/hooks/api'

export function WelcomeToMyPageCard() {
  const { data } = useWelcomeToMyPage()

  if (!data || !instanceOfLandingPage(data)) return null

  return (
    <Card title={data.header} pt={cardPassThrough} className="lg:w-5">
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </Card>
  )
}
