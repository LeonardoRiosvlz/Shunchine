import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateYardRentalInput {
  @Field(() => String, )  truck: string;
  @Field(() => String, )  truckColor: string;
  @Field(() => String, )  tag: string;
  @Field(() => Date, )  rentalDate: Date;
  @Field(() => Float, )  rentalAmount: number;
  @Field(() => ID, { nullable: true }) file?: string;
}
