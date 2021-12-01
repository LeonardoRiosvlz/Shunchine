import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesYardRentalInput {
  @Field(() => ID, {nullable: true} )  yardRental?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
