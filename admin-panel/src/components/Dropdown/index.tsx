import {
  DropdownProps,
  Dropdown as PrimereactDropdown,
} from 'primereact/dropdown'
import style from './style.module.css'

export type TDropdownProps = {
    title?: string
    helpText?: string
} & Omit<DropdownProps, 'title'>

export default function Dropdown(props: TDropdownProps) {
  return (
    <div className={style.dropdown}>
      {props.title && (
        <span className={style.dropdownTitle}>{props.title}</span>
      )}
      <PrimereactDropdown {...props} />
      {props.helpText && (
        <span className={style.dropdownHelpText}>{props.helpText}</span>
      )}
    </div>
  )
}
