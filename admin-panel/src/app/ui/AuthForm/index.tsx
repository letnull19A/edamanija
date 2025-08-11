import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import TextField from '@/components/TextField'
import PasswordField from '@/components/PasswordField'
import style from './style.module.css'

export default function AuthForm() {
  return (
    <Card className={style.authPanel}>
      <h1>Аутентификация</h1>
      <form action=''>
        <TextField title='Логин' />
        <PasswordField title='Пароль' />
        <Button
          label='Войти'
          className={style.authButton}
        />
      </form>
    </Card>
  )
}
