import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateTrailerRentalInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => String, )  unit: string;
  @Field(() => String, )  vin: string;
  @Field(() => String, )  tag: string;
  @Field(() => String, )  year: string;
  @Field(() => String, )  make: string;
  @Field(() => String, )  model: string;
  @Field(() => Date, )  rentalDate: Date;
  @Field(() => Float, )  rentalAmount: number;
}
