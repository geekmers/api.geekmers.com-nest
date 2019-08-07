import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({
    length: 255,
    name: 'first_name',
  })
  firstName: string;

  @Index()
  @Column({
    length: 255,
    name: 'last_name',
  })
  lastName: string;

  @Index()
  @Column({ length: 255 })
  nick: string;

  @Column({
    type: 'date',
    name: 'date_of_birth',
  })
  dateOfBirth: string;

  @Index()
  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 50 })
  gender: string;

  @Column({ type: 'tinyint' })
  nsfw: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @Column({type: 'datetime', name: 'deleted_at'})
  deletedAt: string;
}
