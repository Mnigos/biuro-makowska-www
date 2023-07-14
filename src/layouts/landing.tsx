import { classNames } from 'primereact/utils'

import { LayoutBaseProps } from '.'

import { background } from '~/assets/images'

export function LandingLayout({ children, className }: LayoutBaseProps) {
  return (
    <div
      className={classNames(className)}
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <main className="flex flex-column gap-8">{children}</main>
    </div>
  )
}
