import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesIrpRoadTaxesInput {
  @Field(() => ID, )  entityId: string;
}
