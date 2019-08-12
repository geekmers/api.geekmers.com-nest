import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Comments } from '../comments/comments.entity';
import { Votes } from '../votes/votes.entity';
@Entity()
export class VotesToComments {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Comments, post => post.votesToComments)
  @JoinColumn({ name: 'post_id' })
  public comments!: Comments;

  @ManyToOne(type => Votes, vote => vote.votesToComments)
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
