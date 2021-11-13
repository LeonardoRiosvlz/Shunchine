import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';

@ObjectType()
export class IftaFuelTaxesResponse{
  @Field(() => ID) id: string;
  @Field(() => String, {nullable: true})  iftaAccount?: string;
  @Field(() => String, {nullable: true} )  iftaAccountDetail?: string;
  @Field(() => Date, {nullable: true} )  iftaAccountExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) iftaAccountFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  iftaApplRenewalsChanges?: string;
  @Field(() => String, {nullable: true} )  iftaApplRenewalsChangesDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) iftaApplRenewalsChangesFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  fuelTaxes?: string;
  @Field(() => String, {nullable: true} )  fuelTaxesDetail?: string;
  @Field(() => Date, {nullable: true} )  fuelTaxesExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) fuelTaxesFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  otherIftaRequest?: string;
  @Field(() => String, {nullable: true} )  otherIftaRequestDetail?: string;
  @Field(() => Date, {nullable: true} )  otherIftaRequestExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) otherIftaRequestFile?: CloudFileResponse;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
