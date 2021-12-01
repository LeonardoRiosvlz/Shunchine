import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateYardRentalInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => String, {nullable: true})  truck?: string;
  @Field(() => String, {nullable: true})  truckColor?: string;
  @Field(() => String, {nullable: true})  tag?: string;
  @Field(() => Date, {nullable: true})  rentalDate?: Date;
  @Field(() => Float, {nullable: true})  rentalAmount?: number;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  notes?: string;

}
