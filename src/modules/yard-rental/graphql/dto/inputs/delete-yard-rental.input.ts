import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteYardRentalInput {
  @Field(() => ID, )  entityId: string;
}
