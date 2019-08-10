import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
@Entity()
export class Categories {

  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn({name: 'created_at'})
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;

  @Column({type: 'datetime', name: 'deleted_at'})
  deletedAt: string;
}
