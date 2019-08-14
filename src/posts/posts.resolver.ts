import {
  Resolver,
  Query,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { PostsDto } from './dto/posts.dto';

@Resolver()
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  // @Query(() => String)
  // async hello() {
  //   return 'hello world';
  // }

  @Query(() => [PostsDto])
  async posts() {
    return this.postsService.findAll();
  }
}
