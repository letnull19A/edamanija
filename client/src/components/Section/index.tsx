import style from './style.module.css'

type TSectionProps = {
  children: React.ReactNode
  title: string
}

export default function Section(props: TSectionProps) {
  const { children, title } = props

  return (
    <section className={style.section}>
      <h1 className={style.sectionTitle}>{title}</h1>
      {children}
    </section>
  )
}
