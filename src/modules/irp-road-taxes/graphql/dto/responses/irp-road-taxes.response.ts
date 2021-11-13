import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
@ObjectType()
export class IrpRoadTaxesResponse{
  @Field(() => ID) id: string;
  @Field(() => String, )  irpAccount?: string;
  @Field(() => String, {nullable: true} )  irpAccountDetail?: string;
  @Field(() => Date, {nullable: true} )  irpExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) irpFile?: CloudFileResponse;
  @Field(() => String, )  certificateTitle?: string;
  @Field(() => String, {nullable: true} )  certificateTitleDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) certificateTitleFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  tag?: string;
  @Field(() => String, {nullable: true} )  tagDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) tagFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  roadTax?: string;
  @Field(() => String, {nullable: true} )  roadTaxDetail?: string;
  @Field(() => Date, {nullable: true} )  roadTaxExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) roadTaxFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  leaseAgreement?: string;
  @Field(() => String, {nullable: true} )  leaseAgreementDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) leaseAgreementFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  irpApplicationsRenewals?: string;
  @Field(() => String, {nullable: true} )  irpApplicationsRenewalsDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) irpApplicationsRenewalsFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  otherIrpRequest?: string;
  @Field(() => String, {nullable: true} )  otherIrpRequestDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) otherIrpRequestFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
