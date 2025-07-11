'use client'
import LoadingProductCard from '../../../components/ProductCard/loading'
import style from './style.module.css'

export default function ProductHubSceleton() {
  const mockCards = [0, 0, 0, 0]

  return (
    <div className={style.productHub}>
      {mockCards.map((_, index) => (
        <LoadingProductCard key={index} />
      ))}
    </div>
  )
}
