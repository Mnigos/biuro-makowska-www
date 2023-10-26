import { useRouter } from 'next/router'
import { TabMenu } from 'primereact/tabmenu'
import { Menu } from 'primereact/menu'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
// eslint-disable-next-line import/no-unresolved
import { MenuItem } from 'primereact/menuitem'
import { useState } from 'react'

export function NavigationBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)

  const router = useRouter()

  const pages: (MenuItem & { page: string })[] = [
    {
      label: 'Strona Główna',
      icon: 'pi pi-fw pi-home',
      page: '/',
      command: () => router.push('/'),
    },
    {
      label: 'Kontakt',
      icon: 'pi pi-fw pi-phone',
      page: '/kontakt',
      command: () => router.push('/kontakt'),
    },
    // {
    //   label: 'Cennik',
    //   icon: 'pi pi-fw pi-money-bill',
    //   page: '/cennik',
    //   command: () => router.push('/cennik'),
    // },
  ]

  return (
    <header className="surface-ground border-round-sm justify-content-between z-5 sticky top-0 flex px-4">
      <div className="align-items-center flex gap-4">
        <p className="text-2xl p-component">Biuro Makowska</p>
      </div>

      <nav className="align-items-center flex gap-2">
        <TabMenu
          model={pages}
          activeIndex={pages.findIndex(({ page }) => page === router.pathname)}
          className="h-full hidden md:block"
          pt={{
            menu: {
              className: 'h-full',
            },
          }}
        />

        <div className="block md:hidden">
          <Sidebar
            position="right"
            icons={
              <p className="text-2xl p-component w-full">Biuro Makowska</p>
            }
            pt={{
              header: {
                className: 'py-0',
              },
            }}
            visible={isSidebarVisible}
            onHide={() => setIsSidebarVisible(false)}
          >
            <Menu model={pages} className="w-full surface-overlay" />
          </Sidebar>

          <Button
            icon="pi pi-bars"
            aria-label="Otwórz menu"
            className="border-round-lg"
            onClick={() => setIsSidebarVisible(true)}
            outlined
          />
        </div>
      </nav>
    </header>
  )
}
