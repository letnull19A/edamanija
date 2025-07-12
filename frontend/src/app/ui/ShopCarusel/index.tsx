'use server'

import { Carousel } from 'primereact/carousel'
import ShopCard, { TShopCardProp } from './ShopCard'

async function fetchPartners(): Promise<Array<TShopCardProp>> {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API}partners`)
    .then((data) => data.json() as unknown as Array<TShopCardProp>)
    .then((data) =>
      data.map((element) => ({
        ...element,
        imageUrl: `${process.env.NEXT_PUBLIC_S3_STORAGE}${element.imageUrl}`,
      })),
    )

  return result
}

export default async function ShopCarusel() {
  const partners = await fetchPartners()

  if (partners) {
    return (
      <Carousel
        value={partners}
        numVisible={3}
        numScroll={3}
        itemTemplate={ShopCard}
      />
    )
  } else {
    return <>Error</>
  }
}
