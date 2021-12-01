import { Field, InputType, ID, Float } from '@nestjs/graphql';

@InputType()
export class CreateTrailerRentalInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => String,{nullable: true} )  unit?: string;
  @Field(() => String,{nullable: true} )  vin?: string;
  @Field(() => String,{nullable: true} )  tag?: string;
  @Field(() => String,{nullable: true} )  year?: string;
  @Field(() => String,{nullable: true} )  make?: string;
  @Field(() => String,{nullable: true} )  model?: string;
  @Field(() => Date, {nullable: true})  rentalDate?: Date;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => Float, {nullable: true})  rentalAmount?: number;
  @Field(() => String,{nullable: true} )  notes?: string;
}
