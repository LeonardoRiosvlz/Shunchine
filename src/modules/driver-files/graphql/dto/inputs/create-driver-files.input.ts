import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateDriverFilesInput {
  @Field(() => ID, {nullable: true} )  client: string;
  @Field(() => String, {nullable: true})  name?: string;
  @Field(() => String,{nullable: true} )  dni?: string;
  @Field(() => String, {nullable: true} )  driveLicense?: string;
  @Field(() => ID, { nullable: true }) driveLicenseFile?: string;
  @Field(() => Date, {nullable: true} )  driveLicenseExpiration?: Date;
  @Field(() => ID, { nullable: true }) medicalCardFile?: string;
  @Field(() => Date, {nullable: true} )  medicalCardExpiration?: Date;
  @Field(() => ID, { nullable: true }) mvrFile?: string;
  @Field(() => Date, {nullable: true} )  mvrExpiration?: Date;
  @Field(() => ID, { nullable: true }) socialSecurityFile?: string;
  @Field(() => Date, {nullable: true} )  socialSecurityExpiration?: Date;
  @Field(() => ID, { nullable: true }) driverFile?: string;
  @Field(() => ID, { nullable: true }) driverSignedContractFile?: string;
  @Field(() => ID, { nullable: true }) inquiryToPreviousEmployerFile?: string;
  @Field(() => ID, { nullable: true }) drugsTestFile?: string;
  @Field(() => ID, { nullable: true }) clearingHouseFile?: string;
  @Field(() => Date, {nullable: true} )  clearingHouseExpiration?: Date;
  @Field(() => ID, { nullable: true }) readInspectionsNoaFile?: string;
  @Field(() => ID, { nullable: true }) otherDocuments?: string;
}
