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
import { Comments } from '../comments/comments.entity';
@Entity()
export class CommentsToPosts {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Posts, post => post.commentsToPosts)
  @JoinColumn({ name: 'post_id' })
  public posts!: Posts;

  @ManyToOne(type => Comments, comment => comment.commentsToPosts)
  @JoinColumn({ name: 'comment_id' })
  public comments!: Comments;

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
