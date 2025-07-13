import { CardProps, Card as PrimeReactCard } from 'primereact/card'
import style from './style.module.css'

export default function Card(props: CardProps) {
  const classes = [style.card, props.className].join(' ')

  return <PrimeReactCard {...props} className={classes} />
}
