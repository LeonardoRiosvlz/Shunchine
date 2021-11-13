import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdDrugTestsCustFormResultsInput {
  @Field(() => ID, )  entity__Id: string;
}
