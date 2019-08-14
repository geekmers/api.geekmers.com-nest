import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly postsRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.postsRepository.find();
  }
}
