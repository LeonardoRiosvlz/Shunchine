import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFinancedEquipmentInput {
  @Field(() => ID, )  entity__Id: string;
}
