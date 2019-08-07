import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Files } from '../files/files.entity';

@Entity()
export class Posts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  slug: string;

  @Column({ length: 250 })
  key: string;

  @Column({ length: 250 })
  title: string;

  @Column({
    type: 'tinyint',
    default: 0,
  })
  flag: number;

  @Column({
    type: 'tinyint',
    default: 0,
  })
  mature: number;

  @Column({ name: 'user_id' })
  userId: number;

  @OneToMany(type => Files, files => files.post)
  files: Files[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Column({
    type: 'datetime',
    default: null,
    name: 'deleted_at',
  })
  deletedAt: string;

  @Column({
    type: 'datetime',
    default: null,
    name: 'published_at',
  })
  publishedAt: string;
}
