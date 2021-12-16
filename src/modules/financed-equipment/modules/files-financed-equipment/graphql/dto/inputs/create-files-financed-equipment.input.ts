import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesFinancedEquipmentInput {
  @Field(() => ID, {nullable: true} )  financedEquipment?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
