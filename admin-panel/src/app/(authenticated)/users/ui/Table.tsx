import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

export default function Table() {
  const dataOptions = queryOptions({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}users`)

      return response.json()
    },
    throwOnError: true,
  })

  const { data } = useSuspenseQuery(dataOptions)

  return (
    <DataTable value={data}>
      <Column selectionMode='multiple' />
      <Column header='ID' field='id' />
      <Column header='Название' field='title' />
    </DataTable>
  )
}
