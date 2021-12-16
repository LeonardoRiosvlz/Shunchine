import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateClearinghouseFormInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => String, {nullable: true} )  driverName?: string;
  @Field(() => String, {nullable: true} )  driverDob?: string;
  @Field(() => String, {nullable: true} )  driversLicense?: string;
  @Field(() => String, {nullable: true} )  dot?: string;
}
