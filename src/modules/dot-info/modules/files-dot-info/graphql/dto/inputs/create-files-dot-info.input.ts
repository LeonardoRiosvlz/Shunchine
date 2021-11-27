import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesDotInfoInput {
  @Field(() => ID, {nullable: true} )  dotInfo?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
