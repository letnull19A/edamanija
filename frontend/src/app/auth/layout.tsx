import style from './style.module.css'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className={style.authLayout}>{children}</div>
}
