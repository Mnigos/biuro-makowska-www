import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { usePricesInfo } from '~/hooks/api'

export function PricesInfo() {
  const { data } = usePricesInfo()

  if (!data) return null

  return (
    <section className="p-component">
      <p className="font-bold text-xl">{data.header}</p>

      <span className="text-red-600">
        <ReactMarkdown>{data.warning}</ReactMarkdown>
      </span>
    </section>
  )
}
