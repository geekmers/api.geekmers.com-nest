import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
  Index,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { BoardsToPosts } from '../boardsToPosts/boardsToPosts.entity';

@Entity()
export class Boards {

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

  @Column({ type: 'text' })
  description: string;

  @OneToOne(type => Users)
  @JoinColumn({ name: 'created_by' })
  user: Users;

  @OneToMany((type) => BoardsToPosts, (boardsToPosts) => boardsToPosts.posts)
  public boardsToPosts!: BoardsToPosts[];

  @Column()
  position: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Column({ type: 'datetime',
    name: 'deleted_at',
  })
  deletedAt: string;
}
