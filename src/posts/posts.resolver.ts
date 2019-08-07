import {
  Resolver,
  Query,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostsDto } from './dto/create-posts.dto';

@Resolver()
export class PostsResolver {
  constructor(
    private readonly postsService: PostsService,
  ) {}

  // @Query(() => String)
  // async hello() {
  //   return 'hello world';
  // }

  @Query(() => [CreatePostsDto])
  async posts() {
    return this.postsService.findAll();
  }
}
