import {
  InputText,
  InputTextProps,
} from 'primereact/inputtext'
import style from './style.module.css'

type TPasswordFieldProps = {
  title?: string
  helpText?: string
} & InputTextProps &
  Omit<React.RefAttributes<HTMLInputElement>, 'type'>

export default function PasswordField(
  props: TPasswordFieldProps,
) {
  return (
    <div className={style.passwordField}>
      <span className={style.passwordFieldTitle}>
        {props.title}
      </span>
      <InputText {...props} type='password' />
      {props.helpText && (
        <span className={style.passwordHelpText}>
          {props.helpText}
        </span>
      )}
    </div>
  )
}
