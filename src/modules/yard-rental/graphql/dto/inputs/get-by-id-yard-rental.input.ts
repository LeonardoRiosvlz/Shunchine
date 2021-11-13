import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdYardRentalInput {
  @Field(() => ID, )  entity__Id: string;
}
