import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';


@ObjectType()
export class DotInfoResponse{
  @Field(() => ID) id: string;
  @Field(() => String, {nullable: true})  dot?: string;
  @Field(() => String, {nullable: true} )  dotDetail?: string;
  @Field(() => Date, {nullable: true} )  dotExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) dotFile?: CloudFileResponse;
  @Field(() => String, {nullable: true})  mc?: string;
  @Field(() => String, {nullable: true} )  mcDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) mcFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) taxId?: string;
  @Field(() => String, {nullable: true} ) taxIdDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) taxIdFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) dotPin?: string;
  @Field(() => String, {nullable: true} ) dotPinDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) dotPinFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) mcPin?: string;
  @Field(() => String, {nullable: true} ) mcPinDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) mcPinFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) scac?: string;
  @Field(() => String, {nullable: true} ) scacDetail?: string;
  @Field(() => Date, {nullable: true} )  scacExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) scacFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) ucr?: string;
  @Field(() => String, {nullable: true} ) ucrDetail?: string;
  @Field(() => Date, {nullable: true} )  ucrExpiration?: Date;
  @Field(() => CloudFileResponse, { nullable: true }) ucrFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) bocThree?: string;
  @Field(() => String, {nullable: true} ) bocThreeDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) bocThreeFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) docRoadInspection?: string;
  @Field(() => String, {nullable: true} ) docRoadInspectionDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) docRoadInspectionFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) docAudits?: string;
  @Field(() => String, {nullable: true} ) docAuditsDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) docAuditsFile?: CloudFileResponse;
  @Field(() => String, {nullable: true}) otherDotDocument?: string;
  @Field(() => String, {nullable: true} ) otherDotDocumentDetail?: string;
  @Field(() => CloudFileResponse, { nullable: true }) otherDotDocumentFile?: CloudFileResponse;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
