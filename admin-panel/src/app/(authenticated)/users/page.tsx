'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'primereact/button'
import dynamic from 'next/dynamic'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { useQuery } from '@tanstack/react-query'
import { Errors } from '@/components/Errors'

import style from './style.module.css'

const DynamicTable = dynamic(() => import('./ui/Table'), {
  loading: () => <>Loading component...</>,
  ssr: false,
})

export default function Users() {
  const router = useRouter()

  const userQuery = useQuery({
    queryKey: ['users'],
  })

  return (
    <>
      <div className={style.toolPanel}>
        <Button
          label='Зарегистрировать пользователя'
          icon='pi pi-plus'
          onClick={() => router.push('categories/add')}
        />
        <Button
          label='Удалить выбранное'
          icon='pi pi-trash'
          severity='danger'
        />
        <Button
          disabled={userQuery.isFetching}
          icon={`pi ${userQuery.isFetching ? 'pi-spin' : ''} pi-sync`}
          label={`${userQuery.isFetching ? 'Обновление данных' : 'Обновить'}`}
          severity='warning'
          onClick={() => userQuery.refetch()}
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
