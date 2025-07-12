import PasswordField from '@/components/PasswordField'
import Panel from '@/components/Panel'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import Link from '@/components/Link'
import style from './style.module.css'

export default function RegistrationForm() {
  return (
    <Panel className={style.registrationPanel}>
      <h1 className={style.registrationTitle}>Регистрация</h1>
      <TextField title='Ваш логин' placeholder='Логин из 5-8 символов' />
      <TextField title='Ваш e-mail' placeholder='Действующий e-mail' />
      <PasswordField title='Ваш пароль' placeholder='Пароль' />
      <PasswordField
        title='Подтвердите пароль'
        placeholder='Тоже самое что выше вводили'
      />
      <Button className={style.registrationButton} label='Зарегистрироваться' />
      <Link href={'/registration'}>Есть аккаунт, войти</Link>
    </Panel>
  )
}
