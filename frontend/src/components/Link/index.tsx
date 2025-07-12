import * as NextLink from 'next/link'
import style from './style.module.css'

type TLinkProps = {
  href: string
  children?: React.ReactNode
}

export default function Link(props: TLinkProps) {
  const { href, children } = props

  return (
    <NextLink.default className={style.link} href={href}>
      {children}
    </NextLink.default>
  )
}
