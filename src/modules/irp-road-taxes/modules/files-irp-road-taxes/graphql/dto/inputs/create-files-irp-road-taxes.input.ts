import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesIrpRoadTaxesInput {
  @Field(() => ID, {nullable: true} )  irpRoadTaxes?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
