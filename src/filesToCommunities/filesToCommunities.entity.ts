import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Communities } from '../communities/communities.entity';
import { Files } from '../files/files.entity';
@Entity()
export class FilesToCommunities {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: number;

  @ManyToOne(type => Communities, community => community.filesToCommunities)
  @JoinColumn({ name: 'post_id' })
  public communities!: Communities;

  @ManyToOne(type => Files, file => file.filesToPosts)
  @JoinColumn({ name: 'file_id' })
  public files!: Files;

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
