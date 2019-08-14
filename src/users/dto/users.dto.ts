import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class UsersDto {

  @Field(() => Int)
  readonly id: number;

  @Field()
  readonly firstName: string;

  @Field()
  readonly lastName: string;

  @Field()
  readonly nick: string;

  @Field({ nullable: true })
  readonly dateOfBirth: string;

  @Field({ nullable: true })
  readonly createdAt: string;

  @Field()
  readonly updatedAt: string;

  @Field()
  readonly publishedAt: string;
}
