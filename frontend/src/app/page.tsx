import { Suspense } from 'react'
import ProductHub from './ui/ProductHub'
import ProductHubSceleton from './ui/ProductHub/loading'
import style from './page.module.css'

export default function Home() {
  return (
    <section className={style.productHub}>
      <h1>Топ-4 по заказам</h1>
      <Suspense fallback={<ProductHubSceleton />}>
        <ProductHub />
      </Suspense>
    </section>
  )
}
