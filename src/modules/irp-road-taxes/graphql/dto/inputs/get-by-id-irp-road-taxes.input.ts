import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdIrpRoadTaxesInput {
  @Field(() => ID, )  entity__Id: string;
}
