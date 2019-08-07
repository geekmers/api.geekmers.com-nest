import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class CreatePostsDto {
  @Field(() => Int)
  readonly id: number;
  @Field()
  readonly title: string;
  @Field()
  readonly url: string;
}
