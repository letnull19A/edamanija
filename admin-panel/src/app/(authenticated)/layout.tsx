import SideMenu from '@/components/SideMenu'
import style from './style.module.css'

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={style.authenticatedLayout}>
      <SideMenu />
      <div className={style.authenticatedLayoutViewport}>{children}</div>
    </div>
  )
}
