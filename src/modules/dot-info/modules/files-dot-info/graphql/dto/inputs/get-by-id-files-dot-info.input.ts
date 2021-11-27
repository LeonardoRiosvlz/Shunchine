import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFilesDotInfoInput {
  @Field(() => ID, )  entity__Id: string;
}
