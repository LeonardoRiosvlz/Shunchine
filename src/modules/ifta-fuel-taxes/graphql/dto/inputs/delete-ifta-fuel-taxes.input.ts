import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteIftaFuelTaxesInput {
  @Field(() => ID, )  entityId: string;
}
