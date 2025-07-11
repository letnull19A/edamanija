import { Card } from 'primereact/card'
import style from './style.module.css'
import { Skeleton } from 'primereact/skeleton'

export default function LoadingProductCard() {
  const header = <Skeleton width='100%' height='150px'></Skeleton>
  const title = (
    <Skeleton
      height='2rem'
      className={style.productCardTitleLoading}
    ></Skeleton>
  )
  const subTitle = <Skeleton height='1rem' className='mb-2 mt-2'></Skeleton>

  const footer = (
    <Skeleton className={style.productCardButtonLoading}></Skeleton>
  )

  return (
    <div className='card flex justify-content-center'>
      <Card
        title={title}
        subTitle={subTitle}
        footer={footer}
        header={header}
        className={style.productCard}
      >
        <div>
          <div className={style.productCardTags}>
            <Skeleton className={style.productCardTagLoading}></Skeleton>
            <Skeleton className={style.productCardTagLoading}></Skeleton>
            <Skeleton className={style.productCardTagLoading}></Skeleton>
          </div>
          <div className={style.productCardTextLoading}>
            <Skeleton className={style.productCardTextLineLoading}></Skeleton>
            <Skeleton className={style.productCardTextLineLoading}></Skeleton>
            <Skeleton className={style.productCardTextLineLoading}></Skeleton>
            <Skeleton className={style.productCardTextLineLoading}></Skeleton>
            <Skeleton className={style.productCardTextLineLoading}></Skeleton>
          </div>
        </div>
      </Card>
    </div>
  )
}
