import Image from 'next/image'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { TProduct } from '@/libs/types/Product'
import { Tag } from 'primereact/tag'
import style from './style.module.css'

type TProductCardProps = TProduct

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
      disabled={!props.isAvailible}
      className={style.productCardFooterButton}
      label={`Добавить в корзину ${props.price} руб.`}
      icon='pi pi-plus'
    />
  )

  const cardClassName = props.isAvailible
    ? style.productCard
    : style.productCardNotAvailible

  return (
    <Card
      title={title}
      footer={footer}
      header={header}
      className={cardClassName}
    >
      <div>
        <div className={style.productCardTags}>
          {props.shops?.slice(0, 2).map((item, index) => (
            <Tag
              rounded
              value={item.title}
              key={index}
              style={{ backgroundColor: item.color }}
            ></Tag>
          ))}
        </div>
      </div>
    </Card>
  )
}
