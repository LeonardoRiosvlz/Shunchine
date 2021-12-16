import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdClearinghouseFormInput {
  @Field(() => ID, )  entity__Id: string;
}
