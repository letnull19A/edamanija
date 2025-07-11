import style from './style.module.css'

export type TShopCardProp = {
  id: string
  backgroundColor: string
  imageUrl: string
  title: string
}

export default function ShopCard(props: TShopCardProp) {
  const { imageUrl, backgroundColor, title } = props

  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundColor: backgroundColor,
  }

  return (
    <div className={style.shopCard}>
      <div className={style.shopCardBackground} style={cardStyle}>
        <div className={style.shopCardOverlay}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}
