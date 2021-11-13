import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateIftaFuelTaxesInput {
  @Field(() => String, {nullable: true})  iftaAccount?: string;
  @Field(() => String, {nullable: true} )  iftaAccountDetail?: string;
  @Field(() => Date, {nullable: true} )  iftaAccountExpiration?: Date;
  @Field(() => ID, { nullable: true }) iftaAccountFile?: string;
  @Field(() => String, {nullable: true})  iftaApplRenewalsChanges?: string;
  @Field(() => String, {nullable: true} )  iftaApplRenewalsChangesDetail?: string;
  @Field(() => ID, { nullable: true }) iftaApplRenewalsChangesFile?: string;
  @Field(() => String, {nullable: true})  fuelTaxes?: string;
  @Field(() => String, {nullable: true} )  fuelTaxesDetail?: string;
  @Field(() => Date, {nullable: true} )  fuelTaxesExpiration?: Date;
  @Field(() => ID, { nullable: true }) fuelTaxesFile?: string;
  @Field(() => String, {nullable: true})  otherIftaRequest?: string;
  @Field(() => String, {nullable: true} )  otherIftaRequestDetail?: string;
  @Field(() => Date, {nullable: true} )  otherIftaRequestExpiration?: Date;
  @Field(() => ID, { nullable: true }) otherIftaRequestFile?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}
