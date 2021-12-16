import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteClearinghouseFormInput {
  @Field(() => ID, )  entityId: string;
}
