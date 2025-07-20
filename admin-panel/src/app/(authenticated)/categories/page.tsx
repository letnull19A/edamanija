'use client'

import { Button } from 'primereact/button'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { useQuery } from '@tanstack/react-query'

import style from './style.module.css'

const DynamicTable = dynamic(() => import('./ui/Table'), {
  loading: () => <>Loading component...</>,
  ssr: false,
})

export default function Categories() {
  const router = useRouter()

  const y = useQuery({ queryKey: ['categories'] })
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
          disabled={y.isFetching}
          icon={`pi ${y.isFetching ? 'pi-spin' : ''} pi-sync`}
          label={`${y.isFetching ? 'Обновление данных' : 'Обновить'}`}
          severity='warning'
          onClick={() => y.refetch()}
        />
      </div>
      <ErrorBoundary
        errorComponent={({ error }) => (
          <>Неудалось загрузить данные: {error.message}</>
        )}
      >
        <DynamicTable />
      </ErrorBoundary>
    </>
  )
}
