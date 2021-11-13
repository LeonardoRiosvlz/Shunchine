import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdInvoicesAndPaymentsInput {
  @Field(() => ID, )  entity__Id: string;
}
