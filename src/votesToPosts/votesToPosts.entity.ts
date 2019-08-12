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
import { Votes } from '../votes/votes.entity';
@Entity()
export class VotesToPosts {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Posts, post => post.commentsToPosts)
  @JoinColumn({ name: 'post_id' })
  public posts!: Posts;

  @ManyToOne(type => Votes, vote => vote.votesToPosts)
  @JoinColumn({ name: 'comment_id' })
  public votes!: Votes;

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
