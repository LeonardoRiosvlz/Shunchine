import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdIftaFuelTaxesInput {
  @Field(() => ID, )  entity__Id: string;
}
