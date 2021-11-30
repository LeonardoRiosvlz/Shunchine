import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesTrailerRentalInput {
  @Field(() => ID, {nullable: true} )  trailerRental?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
