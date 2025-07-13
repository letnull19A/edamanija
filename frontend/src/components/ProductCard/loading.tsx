import { Card } from 'primereact/card'
import style from './style.module.css'
import { Skeleton } from 'primereact/skeleton'

export default function LoadingProductCard() {
  const header = <Skeleton width='100%' height='270px'></Skeleton>
  const title = (
    <Skeleton
      height='2rem'
      className={style.productCardTitleLoading}
    ></Skeleton>
  )

  const footer = (
    <Skeleton className={style.productCardButtonLoading}></Skeleton>
  )

  return (
    <Card
      title={title}
      footer={footer}
      header={header}
      className={style.productCardLoading}
    >
      <div>
        <div className={style.productCardTags}>
          <Skeleton className={style.productCardTagLoading}></Skeleton>
          <Skeleton className={style.productCardTagLoading}></Skeleton>
          <Skeleton className={style.productCardTagLoading}></Skeleton>
        </div>
      </div>
    </Card>
  )
}
