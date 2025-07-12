'use client'

import { Button } from 'primereact/button'
import style from './style.module.css'
import { InputText } from 'primereact/inputtext'
import Container from '@/components/Container/layout'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <header className={style.header}>
      <Container>
        <h3 className={style.headerLogo}>Едамания</h3>
        <InputText className={style.headerSearch} placeholder='Найти товар' />
        <Button className={style.headerButtonSearch} label='Найти' />
        <div className={style.headerAuth}>
          <Button
            text
            icon='pi pi-user'
            link
            onClick={() => router.push('/auth')}
          />
          <Button text icon='pi pi-shopping-cart' link />
        </div>
      </Container>
    </header>
  )
}
