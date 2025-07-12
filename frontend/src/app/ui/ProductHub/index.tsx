import ProductCard from '../../../components/ProductCard'
import style from './style.module.css'

type TProduct = {
  id: string
  title: string
  imageUrl: string
  price: number
  is_availible: boolean
}

async function fetchProducts(): Promise<Array<TProduct>> {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API}products`)
    .then((data) => data.json() as unknown as Array<TProduct>)
    .then((data) =>
      data.map((element) => ({
        ...element,
        imageUrl: `${process.env.NEXT_PUBLIC_S3_STORAGE}${element.imageUrl}`,
      })),
    )

  return result
}

export default async function ProductHub() {
  const products = await fetchProducts()

  if (products) {
    return (
      <div className={style.productHub}>
        {products.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
    )
  } else {
    return <>Some Error</>
  }
}
