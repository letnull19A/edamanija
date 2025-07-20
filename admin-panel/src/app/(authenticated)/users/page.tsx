'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'primereact/button'
import dynamic from 'next/dynamic'
import style from './style.module.css'

const DynamicTable = dynamic(() => import('./ui/Table'), {
  loading: () => <>Loading component...</>,
  ssr: false,
})

export default function Users() {
  const router = useRouter()

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
        {/* <Button
          disabled={y.isFetching}
          icon={`pi ${y.isFetching ? 'pi-spin' : ''} pi-sync`}
          label={`${y.isFetching ? 'Обновление данных' : 'Обновить'}`}
          severity='warning'
          onClick={() => y.refetch()}
        /> */}
      </div>
      <DynamicTable />
    </>
  )
}
