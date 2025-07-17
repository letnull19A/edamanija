'use client'

import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

export default function Table(props: { data: any }) {
  return (
    <DataTable value={props.data}>
      <Column selectionMode='multiple' />
      <Column header='ID' field='id' />
      <Column header='Название' field='title' />
    </DataTable>
  )
}
