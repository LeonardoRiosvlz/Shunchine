import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteIrpRoadTaxesInput {
  @Field(() => ID, )  entityId: string;
}
