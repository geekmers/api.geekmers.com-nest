import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Categories } from '../categories/categories.entity';
import { Communities } from '../communities/communities.entity';

@Entity()
export class CategoriesToCommunities {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Communities, community => community.categoriesToCommunities)
  @JoinColumn({ name: 'community_id' })
  public communities!: Communities;

  @ManyToOne(type => Categories, category => category.categoriesToCommunities)
  @JoinColumn({ name: 'category_id' })
  public categories!: Categories;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @Column({
    type: 'datetime',
    name: 'deleted_at',
  })
  deletedAt: string;
}
