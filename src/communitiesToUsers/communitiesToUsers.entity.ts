import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Communities } from '../communities/communities.entity';

@Entity()
export class CommunitiesToUsers {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Communities, community => community.categoriesToCommunities)
  @JoinColumn({ name: 'community_id' })
  public communities!: Communities;

  @ManyToOne(type => Users, user => user.communitiesToUsers)
  @JoinColumn({ name: 'user_id' })
  public users!: Users;

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
