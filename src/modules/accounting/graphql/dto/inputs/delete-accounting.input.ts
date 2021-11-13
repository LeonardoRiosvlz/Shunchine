import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteAccountingInput {
  @Field(() => ID, )  entityId: string;
}
