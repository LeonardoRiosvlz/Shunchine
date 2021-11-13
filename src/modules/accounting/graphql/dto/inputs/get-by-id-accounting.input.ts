import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdAccountingInput {
  @Field(() => ID, )  entity__Id: string;
}
