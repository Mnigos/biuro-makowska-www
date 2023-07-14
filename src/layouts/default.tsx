import { classNames } from 'primereact/utils'

import { LayoutBaseProps } from '.'

export function DefaultLayout({ children, className }: LayoutBaseProps) {
  return (
    <div className={classNames(className)}>
      <main className="flex flex-column gap-8">{children}</main>
    </div>
  )
}
