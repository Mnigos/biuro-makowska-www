import { HTMLAttributes } from 'react'

import { DefaultLayout } from './default'
import { LandingLayout } from './landing'

export enum LayoutType {
  DEFAULT = 'default',
  LANDING = 'landing',
}

export type LayoutBaseProps = HTMLAttributes<HTMLDivElement>

export interface LayoutProps extends LayoutBaseProps {
  type: LayoutType
}

export function Layout({ type, children }: LayoutProps) {
  const classes = 'px-6 surface-ground'

  switch (type) {
    case LayoutType.DEFAULT: {
      return <DefaultLayout className={classes}>{children}</DefaultLayout>
    }
    case LayoutType.LANDING: {
      return <LandingLayout className={classes}>{children}</LandingLayout>
    }
  }
}

export * from './default'
export * from './landing'
