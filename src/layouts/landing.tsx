import { classNames } from 'primereact/utils'

import { LayoutBaseProps } from '.'

import { background } from '~/assets/images'
import { NavigationBar } from '~/components/navigation-bar'

export function LandingLayout({
  children,
  className,
  contentClassName,
}: LayoutBaseProps) {
  return (
    <div
      className={classNames(className)}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <NavigationBar />

      <main className={classNames(contentClassName, 'flex flex-column gap-8')}>
        {children}
      </main>
    </div>
  )
}
