import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FfmpgOptionResponse {
  @Field(() => ID) id: string;
  @Field() option: string;
  @Field(() => Boolean) default: boolean;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}
