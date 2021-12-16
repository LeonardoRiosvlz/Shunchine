import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteRoadTaxesFormInput {
  @Field(() => ID, )  entityId: string;
}
