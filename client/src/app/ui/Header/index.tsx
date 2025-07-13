'use client'

import { Button as PrimeReactButton } from 'primereact/button'
import Container from '@/components/Container/layout'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import style from './style.module.css'
import TextField from '@/components/TextField'

export default function Header() {
  const router = useRouter()

  return (
    <header className={style.header}>
      <Container>
        <h3 className={style.headerLogo}>Едамания</h3>
        <div className={style.headerSearch}>
          <TextField placeholder='Найти товар' />
        </div>
        <Button className={style.headerButtonSearch} label='Найти' />
        <div className={style.headerAuth}>
          <PrimeReactButton
            text
            icon='pi pi-user'
            link
            onClick={() => router.push('/auth')}
          />
          <PrimeReactButton text icon='pi pi-shopping-cart' link />
        </div>
      </Container>
    </header>
  )
}
