import style from './style.module.css'

export default function RegistrationLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={style.registrationLayout}>{children}</div>
}
