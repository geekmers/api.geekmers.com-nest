import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  Index,
  OneToMany,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { CategoriesToCommunities } from '../categoriesToCommunities/categoriesToCommunities.entity';
import { FilesToCommunities } from '../filesToCommunities/filesToCommunities.entity';

@Entity()
export class Communities {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ length: 255 })
  slug: string;

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

  @OneToMany((type) => CategoriesToCommunities, (categoriesToCommunities) => categoriesToCommunities.communities)
  public categoriesToCommunities!: CategoriesToCommunities[];

  @OneToMany((type) => FilesToCommunities, (filesToCommunities) => filesToCommunities.files)
  public filesToCommunities!: FilesToCommunities[];

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
