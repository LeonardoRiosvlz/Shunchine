import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';


@ObjectType()
export class AnnualVehInspStateRermitsResponse{
  @Field(() => ID) id: string;
  @Field(() => String, {nullable: true})  annualVehInspReport?: string;
  @Field(() => String, {nullable: true} )  annualVehInspReportUnbound?: string;
  @Field(() => CloudFileResponse, { nullable: true }) annualVehInspReportFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  statePermits?: string;
  @Field(() => String, {nullable: true} )  statePermitsUnbound?: string;
  @Field(() => Date, {nullable: true} )  statePermitsExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) statePermitsFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  newMexicoLogin?: string;
  @Field(() => String, {nullable: true} )  newMexicoLoginUnbound?: string;
  @Field(() => CloudFileResponse, { nullable: true }) newMexicoLoginFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  newMexicoPassword?: string;
  @Field(() => String, {nullable: true} )  newMexicoPasswordUnbound?: string;
  @Field(() => CloudFileResponse, { nullable: true }) newMexicoPasswordFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  otherPermitInfo?: string;
  @Field(() => String, {nullable: true} )  otherPermitInfoUnbound?: string;
  @Field(() => CloudFileResponse, { nullable: true }) otherPermitInfoFile?: CloudFileResponse;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
