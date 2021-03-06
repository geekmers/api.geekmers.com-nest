import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]),
  ],
  providers: [PostsResolver, PostsService],
})
export class PostsModule {}
