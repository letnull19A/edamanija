import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class Session extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'user_id' })
  userId: string

  @Column({ name: 'access_token' })
  accessToken: string

  @Column({ name: 'refresh_token' })
  refreshToken: string

  @Column({ name: 'date_session_start' })
  dateSessionStart: Date

  @Column({ name: 'date_session_end' })
  dateSessionEnd?: Date

  @Column({ name: 'os' })
  os: string

  @Column({ name: 'client' })
  client: string

  @Column({ name: 'ip_address' })
  ipAddress: string

  @Column({ name: 'is_active' })
  isActive: boolean
}
