import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteTrailerRentalInput {
  @Field(() => ID, )  entityId: string;
}
