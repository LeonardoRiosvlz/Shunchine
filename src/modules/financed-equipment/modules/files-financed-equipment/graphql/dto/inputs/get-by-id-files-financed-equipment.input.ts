import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFilesFinancedEquipmentInput {
  @Field(() => ID, )  entity__Id: string;
}
