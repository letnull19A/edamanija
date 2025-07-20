import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import { DropdownChangeEvent } from 'primereact/dropdown'
import { useState } from 'react'

const DynamicDropdown = dynamic(() => import('@/components/Dropdown'), {
  loading: () => <>load data</>,
  ssr: false,
})

export default function CategoriesDropdown() {
  const dataOptions = queryOptions({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}categories`)

      return response.json()
    },
    throwOnError: true,
  })

  const { data } = useSuspenseQuery(dataOptions)

  const [selectedCity, setSelectedCity] = useState<any | null>(null)

  return (
    <DynamicDropdown
      value={selectedCity}
      title='Подкатегория'
      options={data.filter((u) => u.parentId === undefined)}
      optionLabel='title'
      onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)}
    />
  )
}
