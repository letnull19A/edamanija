import {
  InputText,
  InputTextProps,
} from 'primereact/inputtext'
import style from './style.module.css'

type TTextFieldProps = {
  title?: string
  helpText?: string
} & InputTextProps &
  React.RefAttributes<HTMLInputElement>

export default function TextField(props: TTextFieldProps) {
  return (
    <div className={style.textField}>
      {props.title && (
        <span className={style.textFieldTitle}>
          {props.title}
        </span>
      )}
      <InputText {...props} />
      {props.helpText && (
        <span className={style.textFieldHelpText}>
          {props.helpText}
        </span>
      )}
    </div>
  )
}
