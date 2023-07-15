import { Card } from 'primereact/card'
import ReactMarkdown from 'react-markdown'

import { instanceOfLandingPage } from '~/api/utils'
import { useWelcomeToMyPage } from '~/hooks/api'

export function WelcomeToMyPageCard() {
  const { data } = useWelcomeToMyPage()

  if (!data || !instanceOfLandingPage(data)) return

  return (
    <Card title={data.header}>
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </Card>
  )
}
