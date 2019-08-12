import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn, OneToMany,
} from 'typeorm';
import { VotesToPosts } from '../votesToPosts/votesToPosts.entity';
import { VotesToComments } from '../votesToComments/votesToComments.entity';

@Entity()
export class Votes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 5 })
  type: string;

  @OneToMany((type) => VotesToPosts, (votesToPosts) => votesToPosts.posts)
  public votesToPosts!: VotesToPosts[];

  @OneToMany((type) => VotesToComments, (votesToComments) => votesToComments.comments)
  public votesToComments!: VotesToComments[];

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
