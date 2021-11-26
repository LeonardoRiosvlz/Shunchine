import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesIftaFuelTaxesInput {
  @Field(() => ID, {nullable: true} )  iftaFuelTaxes?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
