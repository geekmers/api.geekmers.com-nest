import {
  Resolver,
  Query,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersDto } from './dto/users.dto';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  // @Query(() => String)
  // async hello() {
  //   return 'hello world';
  // }

  @Query(() => [UsersDto])
  async posts() {
    return this.usersService.findAll();
  }
}
