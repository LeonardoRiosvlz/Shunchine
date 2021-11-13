import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteDrugTestsCustFormResultsInput {
  @Field(() => ID, )  entityId: string;
}
