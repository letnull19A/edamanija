'use client'

import { Carousel } from 'primereact/carousel'
import ShopCard, { TShopCardProp } from './ShopCard'
import { useEffect, useState } from 'react'

export default function ShopCarusel() {
  const [partners, setPartners] = useState<Array<TShopCardProp>>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}partners`)
      .then((data) => data.json() as unknown as Array<TShopCardProp>)
      .then((data) =>
        data.map((element) => ({
          ...element,
          imageUrl: `${process.env.NEXT_PUBLIC_S3_STORAGE}${element.imageUrl}`,
        })),
      )
      .then((data) => setPartners(data))
  }, [])

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
