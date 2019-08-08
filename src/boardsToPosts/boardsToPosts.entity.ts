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
import { Boards } from '../boards/boards.entity';

@Entity()
export class BoardsToPosts {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Posts, post => post.boardsToPosts)
  @JoinColumn({ name: 'post_id' })
  public posts!: Posts;

  @ManyToOne(type => Boards, category => category.boardsToPosts)
  @JoinColumn({ name: 'board_id' })
  public boards!: Boards;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Column({
    type: 'datetime',
    name: 'deleted_at',
  })
  deletedAt: string;
}
