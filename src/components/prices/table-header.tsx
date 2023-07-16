export interface PricesTableHeaderProps {
  label: string
}

export function PricesTableHeader({ label }: PricesTableHeaderProps) {
  return <h3 className="my-1">{label}</h3>
}
