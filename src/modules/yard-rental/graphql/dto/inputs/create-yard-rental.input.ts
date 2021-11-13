import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateYardRentalInput {
  @Field(() => String, )  name: string;
  @Field(() => String, {nullable: true} )  description?: string;
}
