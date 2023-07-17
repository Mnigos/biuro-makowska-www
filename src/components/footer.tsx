import { Divider } from 'primereact/divider'
import { classNames } from 'primereact/utils'
import { HTMLAttributes } from 'react'

export function Footer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer className={classNames('max-w-screen px-2', className)} {...props}>
      <Divider className="surface-100" style={{ height: '1px' }} />

      <p className="p-component w-full text-center">
        Igor Makowski {new Date().getFullYear()} &copy; All right reserved
      </p>
    </footer>
  )
}
