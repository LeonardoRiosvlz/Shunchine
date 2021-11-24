import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class DriverFilesResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse,{nullable: true}) client: SolvedEntityResponse;
  @Field(() => String, {nullable: true})  name?: string;
  @Field(() => String,{nullable: true} )  dni?: string;
  @Field(() => String, {nullable: true} )  driveLicense?: string;
  @Field(() => CloudFileResponse, { nullable: true }) driveLicenseFile?: CloudFileResponse;
  @Field(() => Date, {nullable: true} )  driveLicenseExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) medicalCardFile?: CloudFileResponse;
  @Field(() => Date, {nullable: true} )  medicalCardExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) mvrFile?: CloudFileResponse;
  @Field(() => Date, {nullable: true} )  mvrExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) socialSecurityFile?: CloudFileResponse;
  @Field(() => Date, {nullable: true} )  socialSecurityExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) driverFile?: CloudFileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) driverSignedContractFile?: CloudFileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) inquiryToPreviousEmployerFile?: CloudFileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) drugsTestFile?: CloudFileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) clearingHouseFile?: CloudFileResponse;
  @Field(() => Date, {nullable: true} )  clearingHouseExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) readInspectionsNoaFile?: CloudFileResponse;
  @Field(() => CloudFileResponse, { nullable: true }) otherDocuments?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
