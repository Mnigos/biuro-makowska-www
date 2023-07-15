import { HTMLAttributes } from 'react'

import { NavigationBar } from '~/components/navigation-bar'
import { Footer } from '~/components/footer'
import { background } from '~/assets/images'

export enum LayoutType {
  DEFAULT = 'default',
  LANDING = 'landing',
}

export interface LayoutBaseProps extends HTMLAttributes<HTMLDivElement> {
  contentClassName?: string
}

export interface LayoutProps extends LayoutBaseProps {
  type: LayoutType
}

export function Layout({ type, children }: LayoutProps) {
  const style =
    type === LayoutType.LANDING
      ? {
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: 'no-repeat',
        }
      : undefined

  return (
    <div className="surface-ground" style={style}>
      <NavigationBar />

      <main className="flex flex-column gap-8 px-4 md:px-6">{children}</main>

      <Footer style={{ margin: '16rem 0px 2rem 0px' }} />
    </div>
  )
}
