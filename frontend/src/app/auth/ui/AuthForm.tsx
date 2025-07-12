import PasswordField from '@/components/PasswordField'
import Panel from '@/components/Panel'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import Link from '@/components/Link'
import style from './style.module.css'

export default function AuthForm() {
  return (
    <Panel className={style.authPanel}>
      <h1 className={style.authTitle}>Войти в аккаунт</h1>
      <TextField title='Введите ваш логин' placeholder='Лоин или почту' />
      <PasswordField title='Введите ваш пароль' placeholder='Пароль' />
      <Button className={style.authButton} label='Войти' />
      <Link href={'/registration'}>Нет аккаунта</Link>
    </Panel>
  )
}
