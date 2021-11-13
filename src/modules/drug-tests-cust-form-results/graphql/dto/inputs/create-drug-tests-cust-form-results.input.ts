import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateDrugTestsCustFormResultsInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
}
