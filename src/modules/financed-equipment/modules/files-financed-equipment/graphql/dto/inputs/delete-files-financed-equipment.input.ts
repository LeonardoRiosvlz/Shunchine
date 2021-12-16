import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesFinancedEquipmentInput {
  @Field(() => ID, )  entityId: string;
}
