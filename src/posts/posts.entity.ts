import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { BoardsToPosts } from '../boardsToPosts/boardsToPosts.entity';
import { FilesToPosts } from '../filesToPosts/filesToPosts.entity';
import { CommentsToPosts } from '../commentsToPosts/commentsToPosts.entity';

@Entity()
export class Posts {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ length: 255 })
  slug: string;

  @Index()
  @Column({ length: 255 })
  key: string;

  @Index()
  @Column({ length: 255 })
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

  @OneToOne(type => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @OneToMany((type) => BoardsToPosts, (boardsToPosts) => boardsToPosts.posts)
  public boardsToPosts!: BoardsToPosts[];

  @OneToMany((type) => FilesToPosts, (filesToPosts) => filesToPosts.posts)
  public filesToPosts!: FilesToPosts[];

  @OneToMany((type) => CommentsToPosts, (commentsToPosts) => commentsToPosts.posts)
  public commentsToPosts!: CommentsToPosts[];

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
