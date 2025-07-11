import Image from 'next/image'

export type TShopCardProp = {
  id: string
  backgroundColor: string
  imageUrl: string
  title: string
}

export default function ShopCard(props: TShopCardProp) {
  const { id, imageUrl, title, backgroundColor } = props

  return (
    <div className=''>
      <div style={{ backgroundColor: backgroundColor }}>
        <Image width={270} height={100} src={imageUrl} alt={'some image'} />
      </div>
      <div className=''></div>
    </div>
  )
}
