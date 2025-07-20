'use client'

import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { Button } from 'primereact/button'
import style from './style.module.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'

const DynamicTable = dynamic(() => import('./ui/Table'), {
  loading: () => <>Loading component...</>,
  ssr: false,
})

export default function Categories() {
  const dataOptions = queryOptions({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}categories`)

        return response.json()
      } catch {
        return {}
      }
    },
  })

  const { data, refetch, isFetching } = useSuspenseQuery(dataOptions)

  const router = useRouter()

  return (
    <>
      <div className={style.toolPanel}>
        <Button
          label='Добавить категорию'
          icon='pi pi-plus'
          onClick={() => router.push('categories/add')}
        />
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
      <ErrorBoundary
        errorComponent={({ error }) => (
          <>Failed to load content: {error.message}</>
        )}
      >
        <DynamicTable data={data} />
      </ErrorBoundary>
    </>
  )
}
