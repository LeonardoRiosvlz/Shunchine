import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
@ObjectType()
export class SubstanceComplianceClearinghouseResponse{
  @Field(() => ID) id: string;
  @Field(() => String, {nullable: true})  drugRandomEnrollment?: string;
  @Field(() => String, {nullable: true} )  drugRandomEnrollmentDetail?: string;
  @Field(() => Date, {nullable: true} )  drugRandomEnrollmentExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) drugRandomEnrollmentFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  reasonableSuspicious?: string;
  @Field(() => String, {nullable: true} )  reasonableSuspiciousDetail?: string;
  @Field(() => Date, {nullable: true} )  reasonableSuspiciousExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) reasonableSuspiciousFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  clearingHouseLogin?: string;
  @Field(() => String, {nullable: true} )  clearingHouseLoginDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) clearingHouseLoginFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  clearingHousePassword?: string;
  @Field(() => String, {nullable: true} )  clearingHousePasswordDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) clearingHousePasswordFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  clearingHouseRegQueries?: string;
  @Field(() => String, {nullable: true} )  clearingHouseRegQueriesDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) clearingHouseRegQueriesFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  otherSubstanceRequest?: string;
  @Field(() => String, {nullable: true} )  otherSubstanceRequestDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) otherSubstanceRequestFile?: CloudFileResponse;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
