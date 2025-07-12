import Image from 'next/image'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { Tag } from 'primereact/tag'
import style from './style.module.css'

type TProductCardProps = {
  id: string
  title: string
  imageUrl: string
  price: number
  is_availible: boolean
}

export default function ProductCard(props: TProductCardProps) {
  const title = <h4 className={style.productCardTitle}>{props.title}</h4>

  const header = (
    <Image
      alt='Card'
      quality={100}
      objectFit='cover'
      style={{
        position: 'relative',
        top: '-30px',
      }}
      width={100}
      height={270}
      src={`${props.imageUrl}`}
    />
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
        </div>
      </Card>
    </div>
  )
}
