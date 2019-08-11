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
import { Files } from '../files/files.entity';
@Entity()
export class FilesToPosts {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: number;

  @ManyToOne(type => Posts, post => post.filesToPosts)
  @JoinColumn({ name: 'post_id' })
  public posts!: Posts;

  @ManyToOne(type => Files, file => file.filesToPosts)
  @JoinColumn({ name: 'file_id' })
  public files!: Files;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @Column({
    type: 'datetime',
    name: 'deleted_at',
  })
  deletedAt: string;
}
