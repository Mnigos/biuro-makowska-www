import { classNames } from 'primereact/utils'
import { HTMLAttributes } from 'react'

export interface ContantLinkProps extends HTMLAttributes<HTMLDivElement> {
  href: string
  icon: string
}

export function ContactLink({ href, icon, children }: ContantLinkProps) {
  return (
    <div className="flex gap-2">
      <i className={classNames('text-primary text-xl', icon)} />
      <a
        href={href}
        target="_blank"
        className="text-white text-xl no-underline hover:text-primary transition-colors transition-duration-300"
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  )
}
