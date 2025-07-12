import { PanelProps, Panel as PrimeReactPanel } from 'primereact/panel'
import style from './style.module.css'

export default function Panel(props: Omit<PanelProps, 'unstyled'>) {
  const classes = [style.panel, props.className].join(' ')

  return (
    <PrimeReactPanel {...props} unstyled className={classes}>
      {props.children}
    </PrimeReactPanel>
  )
}
