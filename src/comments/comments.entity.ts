import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index, OneToOne, JoinColumn, OneToMany,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { CommentsToPosts } from '../commentsToPosts/commentsToPosts.entity';

@Entity()
export class Comments {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  comment: string;

  @OneToOne(type => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @OneToMany((type) => CommentsToPosts, (commentsToPosts) => commentsToPosts.comments)
  public commentsToPosts!: CommentsToPosts[];

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
