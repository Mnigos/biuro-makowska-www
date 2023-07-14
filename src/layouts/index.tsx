import { HTMLAttributes } from 'react'

import { DefaultLayout } from './default'
import { LandingLayout } from './landing'

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
  const classes = 'surface-ground'
  const contentClasses = 'px-6'

  switch (type) {
    case LayoutType.DEFAULT: {
      return (
        <DefaultLayout className={classes} contentClassName={contentClasses}>
          {children}
        </DefaultLayout>
      )
    }
    case LayoutType.LANDING: {
      return (
        <LandingLayout className={classes} contentClassName={contentClasses}>
          {children}
        </LandingLayout>
      )
    }
  }
}

export * from './default'
export * from './landing'
