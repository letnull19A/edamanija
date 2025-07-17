'use client'

import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { Button } from 'primereact/button'
import style from './style.module.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const DynamicTable = dynamic(() => import('./ui/Table'), {
  loading: () => <>Loading component...</>,
  ssr: false,
})

export default function Categories() {
  const dataOptions = queryOptions({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}categories`)

      return response.json()
    },
  })

  const { data, refetch, isFetching } = useSuspenseQuery(dataOptions)

  const router = useRouter()

  return (
    <>
      <div className={style.toolPanel}>
        <Button label='Добавить категорию' icon='pi pi-plus' onClick={() => router.push('categories/add')}/>
        <Button
          label='Удалить выбранное'
          icon='pi pi-trash'
          severity='danger'
        />
        <Button
          disabled={isFetching}
          icon={`pi ${isFetching ? 'pi-spin' : ''} pi-sync`}
          label='Обновить'
          severity='warning'
          onClick={() => refetch()}
        />
      </div>
      <DynamicTable data={data} />
    </>
  )
}
