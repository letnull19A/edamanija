'use client'

import Panel from '@/components/Panel'
import TextField from '@/components/TextField'
import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { Button } from 'primereact/button'
import CategoriesDropdown from './ui/CategoriesDropdown'

export default function AddCategoryPage() {
  return (
    <Panel>
      <h1>Добавление категории</h1>
      <form>
        <TextField title='Название' />
        <ErrorBoundary errorComponent={() => <>Failed to load categories</>}>
          <CategoriesDropdown />
        </ErrorBoundary>
        <Button icon='pi pi-save' label='Сохранить' />
      </form>
    </Panel>
  )
}
