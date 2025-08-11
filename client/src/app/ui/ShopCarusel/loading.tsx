'use client'

import { Skeleton } from 'primereact/skeleton'
import style from './style.module.css'

export default function ShopCaruselSceleton() {
  const values = [0, 0, 0]

  return (
    <div className={style.skeletonCarusel}>
      {values.map((_, index) => (
        <Skeleton
          className={style.skeletonCaruselCard}
          key={index}
        />
      ))}
    </div>
  )
}
