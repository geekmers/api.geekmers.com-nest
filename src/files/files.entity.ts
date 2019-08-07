import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Posts } from '../posts/posts.entity';

@Entity()
export class Files {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  slug: string;

  @Column({ length: 250 })
  key: string;

  @Column({ length: 250 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'file_name', length: 250 })
  fileName: string;

  @Column({ name: 'field_type_id'})
  fileTypeId: number;

  @Column({ name: 'user_id'})
  userId: number;

  @ManyToOne(type => Posts, post => post.files)
  @JoinColumn({ name: 'post_id' })
  post: Posts;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @Column({type: 'datetime', name: 'deleted_at'})
  deletedAt: string;
}
