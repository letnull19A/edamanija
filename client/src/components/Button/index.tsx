import {
  ButtonProps,
  Button as PrimeReactButton,
} from 'primereact/button'
import style from './style.module.css'

export default function Button(props: ButtonProps) {
  const classes = [style.button, props.className].join(' ')

  return <PrimeReactButton {...props} className={classes} />
}
