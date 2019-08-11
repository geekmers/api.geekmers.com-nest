import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index, OneToMany,
} from 'typeorm';
import { CategoriesToCommunities } from '../categoriesToCommunities/categoriesToCommunities.entity';

@Entity()
export class Categories {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany((type) => CategoriesToCommunities, (categoriesToCommunities) => categoriesToCommunities.categories)
  public categoriesToCommunities!: CategoriesToCommunities[];

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @Column({type: 'datetime', name: 'deleted_at'})
  deletedAt: string;
}
