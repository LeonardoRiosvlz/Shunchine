import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateIrpRoadTaxesInput {
  @Field(() => String, )  irpAccount?: string;
  @Field(() => String, {nullable: true} )  irpAccountDetail?: string;
  @Field(() => Date, {nullable: true} )  irpExpiration?: Date;
  @Field(() => ID, { nullable: true }) irpFile?: string;
  @Field(() => String, )  certificateTitle: string;
  @Field(() => String, {nullable: true} )  certificateTitleDetail?: string;
  @Field(() => ID, { nullable: true }) certificateTitleFile?: string;
  @Field(() => String, {nullable: true})  tag?: string;
  @Field(() => String, {nullable: true} )  tagDetail?: string;
  @Field(() => Date, {nullable: true} )  tagExpiration?: Date;
  @Field(() => ID, { nullable: true }) tagFile?: string;
  @Field(() => String, {nullable: true})  roadTax?: string;
  @Field(() => String, {nullable: true} )  roadTaxDetail?: string;
  @Field(() => Date, {nullable: true} )  roadTaxExpiration?: Date;
  @Field(() => ID, { nullable: true }) roadTaxFile?: string;
  @Field(() => String, {nullable: true})  leaseAgreement?: string;
  @Field(() => String, {nullable: true} )  leaseAgreementDetail?: string;
  @Field(() => ID, { nullable: true }) leaseAgreementFile?: string;
  @Field(() => String, {nullable: true})  irpApplicationsRenewals?: string;
  @Field(() => String, {nullable: true} )  irpApplicationsRenewalsDetail?: string;
  @Field(() => ID, { nullable: true }) irpApplicationsRenewalsFile?: string;
  @Field(() => String, {nullable: true})  otherIrpRequest?: string;
  @Field(() => String, {nullable: true} )  otherIrpRequestDetail?: string;
  @Field(() => ID, { nullable: true }) otherIrpRequestFile?: string;
}
