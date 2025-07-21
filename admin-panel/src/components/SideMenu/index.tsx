import Link from 'next/link'
import style from './style.module.css'

export default function SideMenu() {
  return (
    <div className={style.sideMenu}>
      <ul className={style.sideMenuContent}>
        <li className={style.sideMenuListItem}>
          <Link href='/users'>Пользователи</Link>
        </li>
        <li className={style.sideMenuListItem}>
          <Link href='/categories'>Категории товаров</Link>
        </li>
        <li className={style.sideMenuListItem}>
          <Link href='/products'>Товары</Link>
        </li>
      </ul>
    </div>
  )
}
