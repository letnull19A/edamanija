import ProductCard from '../../../components/ProductCard'
import style from './style.module.css'

type TProduct = {
  title: string
}

const data: Array<TProduct> = [
  { title: 'Пиперони' },
  { title: 'Coca Cola' },
  { title: 'RedBull' },
  { title: 'Бургер' },
]

async function fetchProducts(): Promise<Array<TProduct>> {
  await new Promise((resolve) => setTimeout(resolve, 4000))

  return data
}

export default async function ProductHub() {
  const products = await fetchProducts()

  if (products) {
    return (
      <div className={style.productHub}>
        {products.map((item, index) => (
          <ProductCard title={item.title} key={index} />
        ))}
      </div>
    )
  } else {
    return <>Some Error</>
  }
}
