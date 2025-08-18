import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm'

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ default: '', name: 'label' })
  label: string

  @Column({
    default: '',
    description: 'description here...',
  })
  description: string

  @Column({ default: false, name: 'is_children' })
  isChildren: boolean

  @Column({ default: '', name: 'parent_id' })
  parentId: string
}
