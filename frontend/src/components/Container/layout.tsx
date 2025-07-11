import style from './style.module.css'

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className={style.container}>{children}</div>
}
