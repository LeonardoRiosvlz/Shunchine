import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteInvoicesAndPaymentsInput {
  @Field(() => ID, )  entityId: string;
}
