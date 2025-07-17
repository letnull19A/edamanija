import Link from 'next/link'
import style from './style.module.css'

export default function SideMenu() {
  return (
    <div className={style.sideMenu}>
      <ul>
        <li>
          <Link href='/users'>Пользователи</Link>
        </li>
        <li>
          <Link href='/categories'>Категории товаров</Link>
        </li>
        <li>
          <Link href="/products">Товары</Link>
        </li>
      </ul>
    </div>
  )
}
