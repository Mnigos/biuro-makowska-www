import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

import { PricesTableHeader } from './table-header'

import { PricesCard } from '~/api/types'

export interface PricesTableProps {
  pricesCards: PricesCard[]
}

export function PricesTable({ pricesCards }: PricesTableProps) {
  return (
    <>
      {pricesCards.map(({ header, tables }) => (
        <section key={header}>
          <h2 className="p-component text-2xl font-bold">{header}</h2>

          <div className="flex flex-column gap-4">
            {tables.map(({ header, rows }) => (
              <DataTable
                value={rows}
                key={header}
                header={<PricesTableHeader label={header} />}
                showGridlines
                pt={{
                  header: {
                    className: 'surface-overlay',
                  },
                  thead: {
                    className: 'text-lg',
                  },
                }}
                className="border-round-lg"
              >
                <Column field="0" header="Usługa" />
                <Column field="1" header="Cena" />
                {rows[0][2] && <Column field="2" header="Szczegóły" />}
              </DataTable>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
