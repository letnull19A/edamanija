import { Suspense } from 'react'
import ProductHub from './ui/ProductHub'
import ProductHubSceleton from './ui/ProductHub/loading'
import ShopCarusel from './ui/ShopCarusel'
import ShopCaruselSceleton from './ui/ShopCarusel/loading'
import Section from '@/components/Section'

export default function Home() {
  return (
    <>
      <Section title='Наши партнёры'>
        <Suspense fallback={<ShopCaruselSceleton />}>
          <ShopCarusel />
        </Suspense>
      </Section>
      <Section title='Топ-4 по заказам'>
        <Suspense fallback={<ProductHubSceleton />}>
          <ProductHub />
        </Suspense>
      </Section>
    </>
  )
}
