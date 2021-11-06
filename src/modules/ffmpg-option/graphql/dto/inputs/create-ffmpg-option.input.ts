import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFfmpgOptionInput {
  @Field(() => String,) option: string;
  @Field(() => Boolean,) default: boolean;
  @Field(() => String, { nullable: true }) description?: string;
}
