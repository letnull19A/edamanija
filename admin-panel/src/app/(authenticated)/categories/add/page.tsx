'use client'

import Panel from '@/components/Panel'
import TextField from '@/components/TextField'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { Button } from 'primereact/button'
import { DropdownChangeEvent } from 'primereact/dropdown'
import { useState } from 'react'

const DynamicDropdown = dynamic(() => import('@/components/Dropdown'), {
  loading: () => <>load data</>,
  ssr: false,
})

export default function AddCategoryPage() {
  const dataOptions = queryOptions({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}categories`)

      return response.json()
    },
  })

  const { data } = useSuspenseQuery(dataOptions)

  const [selectedCity, setSelectedCity] = useState<any | null>(null)

  return (
    <Panel>
      <h1>Добавление категории</h1>
      <form>
        <TextField title='Название' />
        <DynamicDropdown
          value={selectedCity}
          title='Подкатегория'
          options={data.filter(u => u.parentId === undefined)}
          optionLabel='title'
          onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
        />
        <Button icon='pi pi-save' label='Сохранить' />
      </form>
    </Panel>
  )
}
