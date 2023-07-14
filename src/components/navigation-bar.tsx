import { useRouter } from 'next/router'
import { TabMenu } from 'primereact/tabmenu'

export function NavigationBar() {
  const router = useRouter()

  const pages = [
    {
      label: 'Strona Główna',
      icon: 'pi pi-fw pi-home',
      command: () => router.push('/'),
    },
    {
      label: 'Cennik',
      icon: 'pi pi-fw pi-money-bill',
      command: () => router.push('/cennik'),
    },
  ]

  return (
    <header className="surface-ground border-round-sm justify-content-between z-5 sticky top-0 flex px-4">
      <div className="align-items-center flex gap-4">
        <p className="text-2xl p-component">Biuro Makowska</p>
      </div>

      <nav className="align-items-center flex gap-2">
        <TabMenu
          model={pages}
          className="h-full"
          pt={{
            menu: {
              className: 'h-full',
            },
          }}
        />
      </nav>
    </header>
  )
}
