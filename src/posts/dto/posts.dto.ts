import { Field, ObjectType, Int } from 'type-graphql';
import { UsersDto } from '../../users/dto/users.dto';

@ObjectType()
export class PostsDto {

  @Field(() => Int)
  readonly id: number;

  @Field()
  readonly title: string;

  @Field()
  readonly slug: string;

  @Field()
  readonly mature: boolean;

  @Field(type => UsersDto)
  user: UsersDto;

  @Field({ nullable: true })
  readonly createdAt: string;

  @Field()
  readonly updatedAt: string;

  @Field()
  readonly publishedAt: string;
}
