import { classNames } from 'primereact/utils'

import { LayoutBaseProps } from '.'

import { NavigationBar } from '~/components/navigation-bar'

export function DefaultLayout({
  children,
  className,
  contentClassName,
}: LayoutBaseProps) {
  return (
    <div className={classNames(className)}>
      <NavigationBar />

      <main className={classNames(contentClassName, 'flex flex-column gap-8')}>
        {children}
      </main>
    </div>
  )
}
