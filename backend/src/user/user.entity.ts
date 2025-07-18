// import { Session } from './../auth/session.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  //   OneToMany,
} from 'typeorm'

export type Gender = 'MALE' | 'FEMALE' | 'NOBODY'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ default: '' })
  name: string

  @Column({ default: '' })
  surname: string

  @Column({ default: '' })
  fatherName?: string

  @Column({ default: 'NOBODY' })
  gender: Gender

  @Column({ default: '' })
  email: string

  @Column({ default: '' })
  phone: string

  @Column()
  login: string

  @Column({ default: '' })
  password: string

  //   @OneToMany(() => Session, (session) => session.user)
  //   sessions: Array<Session>
}
