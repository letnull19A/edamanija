import Link from 'next/link'
import Container from '../Container/layout'
import style from './style.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footerInner}>
          <ul className={style.footerColumn}>
            <li>
              <h2 className={style.footerTitle}>Едамания</h2>
            </li>
            <li className={style.footerLink}>
                <Link href={'/'}>Контакты</Link>
            </li>
            <li className={style.footerLink}>
                <Link href={'/about'}>О Нас</Link>
            </li>
            <li className={style.footerLink}>
                <Link href={'/policy/privacy'}>Политика конфедациальности</Link>
            </li>
            <li className={style.footerLink}>
                <Link href={'/policy/returning'}>Политика возврата</Link>
            </li>
          </ul>
          <ul className={style.footerColumn}>2</ul>
          <ul className={style.footerColumn}>3</ul>
          <ul className={style.footerColumn}>4</ul>
        </div>
      </Container>
    </footer>
  )
}
