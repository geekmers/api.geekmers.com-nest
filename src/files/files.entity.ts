import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  Index,
  OneToMany,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { FilesToPosts } from '../filesToPosts/filesToPosts.entity';

@Entity()
export class Files {

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

  @Column({ name: 'file_name', length: 255 })
  fileName: string;

  @Column({ name: 'field_type_id'})
  fileTypeId: number;

  @OneToOne(type => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @OneToMany((type) => FilesToPosts, (filesToPosts) => filesToPosts.posts)
  public filesToPosts!: FilesToPosts[];

  @Column()
  position: number;

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
