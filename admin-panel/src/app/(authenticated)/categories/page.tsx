'use client'

import { Button } from 'primereact/button'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { useQuery } from '@tanstack/react-query'

import style from './style.module.css'
import { Errors } from '@/components/Errors'

const DynamicTable = dynamic(() => import('./ui/Table'), {
  loading: () => <>Loading component...</>,
  ssr: false,
})

export default function Categories() {
  const router = useRouter()

  const categoryQuery = useQuery({
    queryKey: ['categories'],
  })
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
          disabled={categoryQuery.isFetching}
          icon={`pi ${categoryQuery.isFetching ? 'pi-spin' : ''} pi-sync`}
          label={`${categoryQuery.isFetching ? 'Обновление данных' : 'Обновить'}`}
          severity='warning'
          onClick={() => categoryQuery.refetch()}
        />
      </div>
      <ErrorBoundary
        errorComponent={({ error }) => (
          <Errors.FailedFatch error={error} />
        )}
      >
        <DynamicTable />
      </ErrorBoundary>
    </>
  )
}
