import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateRoadTaxesFormInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => String, {nullable: true} )  taxId?: string;
  @Field(() => String, {nullable: true} )  vehicleTitleOwnerName?: string;
  @Field(() => String, {nullable: true} )  address?: string;
  @Field(() => String, {nullable: true} )  unit?: string;
  @Field(() => String, {nullable: true} )  vin?: string;
  @Field(() => String, {nullable: true} )  unitYear?: string;
  @Field(() => String, {nullable: true} )  monthFirstUsed?: string;
}
