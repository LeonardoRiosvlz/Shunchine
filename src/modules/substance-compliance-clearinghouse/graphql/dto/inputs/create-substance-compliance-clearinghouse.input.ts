import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateSubstanceComplianceClearinghouseInput {
  @Field(() => String, {nullable: true})  drugRandomEnrollment?: string;
  @Field(() => String, {nullable: true} )  drugRandomEnrollmentDetail?: string;
  @Field(() => Date, {nullable: true} )  drugRandomEnrollmentExpiration?: Date;
  @Field(() => ID, { nullable: true }) drugRandomEnrollmentFile?: string;
  @Field(() => String, {nullable: true})  reasonableSuspicious?: string;
  @Field(() => String, {nullable: true} )  reasonableSuspiciousDetail?: string;
  @Field(() => Date, {nullable: true} )  reasonableSuspiciousExpiration?: Date;
  @Field(() => ID, { nullable: true }) reasonableSuspiciousFile?: string;
  @Field(() => String, {nullable: true})  clearingHouseLogin?: string;
  @Field(() => String, {nullable: true} )  clearingHouseLoginDetail?: string;
  @Field(() => ID, { nullable: true }) clearingHouseLoginFile?: string;
  @Field(() => String, {nullable: true})  clearingHousePassword?: string;
  @Field(() => String, {nullable: true} )  clearingHousePasswordDetail?: string;
  @Field(() => ID, { nullable: true }) clearingHousePasswordFile?: string;
  @Field(() => String, {nullable: true})  clearingHouseRegQueries?: string;
  @Field(() => String, {nullable: true} )  clearingHouseRegQueriesDetail?: string;
  @Field(() => ID, { nullable: true }) clearingHouseRegQueriesFile?: string;
  @Field(() => String, {nullable: true})  otherSubstanceRequest?: string;
  @Field(() => String, {nullable: true} )  otherSubstanceRequestDetail?: string;
  @Field(() => ID, { nullable: true }) otherSubstanceRequestFile?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}
