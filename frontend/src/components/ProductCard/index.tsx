import Image from 'next/image'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { Tag } from 'primereact/tag'
import style from './style.module.css'

type TProductCardProps = {
  title: string
}

export default function ProductCard(props: TProductCardProps) {
  const title = <h4 className={style.productCardTitle}>{props.title}</h4>

  const header = (
    <Image alt='Card' width={100} height={150} src='/usercard.png' />
  )

  const footer = (
    <Button
      className={style.productCardFooterButton}
      label='Добавить в корзину'
      icon='pi pi-plus'
    />
  )

  return (
    <div className='card flex justify-content-center'>
      <Card
        title={title}
        footer={footer}
        header={header}
        className={style.productCard}
      >
        <div>
          <div className={style.productCardTags}>
            <Tag rounded value='Primary'></Tag>
            <Tag rounded value='Primary'></Tag>
            <Tag rounded value='Primary'></Tag>
          </div>
          <p className={style.productCardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </div>
      </Card>
    </div>
  )
}
