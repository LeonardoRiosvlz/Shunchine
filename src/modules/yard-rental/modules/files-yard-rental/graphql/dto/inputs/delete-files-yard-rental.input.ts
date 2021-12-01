import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesYardRentalInput {
  @Field(() => ID, )  entityId: string;
}
