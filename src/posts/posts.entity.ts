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
import { Files } from '../files/files.entity';
import { Users } from '../users/users.entity';
import { BoardsToPosts } from '../boardsToPosts/boardsToPosts.entity';

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

  @OneToMany(type => Files, files => files.post)
  files: Files[];

  @OneToMany((type) => BoardsToPosts, (boardsToPosts) => boardsToPosts.posts)
  public boardsToPosts!: BoardsToPosts[];

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
