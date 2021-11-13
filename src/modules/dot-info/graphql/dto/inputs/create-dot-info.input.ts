import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateDotInfoInput {
  @Field(() => String, {nullable: true})  dot?: string;
  @Field(() => String, {nullable: true} )  dotDetail?: string;
  @Field(() => Date, {nullable: true} )  dotExpiration?: Date;
  @Field(() => ID, { nullable: true }) dotFile?: string;
  @Field(() => String, {nullable: true})  mc?: string;
  @Field(() => String, {nullable: true} )  mcDetail?: string;
  @Field(() => ID, { nullable: true }) mcFile?: string;
  @Field(() => String, {nullable: true}) taxId?: string;
  @Field(() => String, {nullable: true} ) taxIdDetail?: string;
  @Field(() => ID, { nullable: true })taxIdFile?: string;
  @Field(() => String, {nullable: true}) dotPin?: string;
  @Field(() => String, {nullable: true} ) dotPinDetail?: string;
  @Field(() => ID, { nullable: true })dotPinFile?: string;
  @Field(() => String, {nullable: true}) mcPin?: string;
  @Field(() => String, {nullable: true} ) mcPinDetail?: string;
  @Field(() => ID, { nullable: true }) mcPinFile?: string;
  @Field(() => String, {nullable: true}) scac?: string;
  @Field(() => String, {nullable: true} ) scacDetail?: string;
  @Field(() => Date, {nullable: true} )  scacExpiration?: Date;
  @Field(() => ID, { nullable: true }) scacFile?: string;
  @Field(() => String, {nullable: true}) ucr?: string;
  @Field(() => String, {nullable: true} ) ucrDetail?: string;
  @Field(() => Date, {nullable: true} )  ucrExpiration?: Date;
  @Field(() => ID, { nullable: true }) ucrFile?: string;
  @Field(() => String, {nullable: true}) bocThree?: string;
  @Field(() => String, {nullable: true} ) bocThreeDetail?: string;
  @Field(() => ID, { nullable: true }) bocThreeFile?: string;
  @Field(() => String, {nullable: true}) docRoadInspection?: string;
  @Field(() => String, {nullable: true} ) docRoadInspectionDetail?: string;
  @Field(() => ID, { nullable: true }) docRoadInspectionFile?: string;
  @Field(() => String, {nullable: true}) docAudits?: string;
  @Field(() => String, {nullable: true} ) docAuditsDetail?: string;
  @Field(() => ID, { nullable: true }) docAuditsFile?: string;
  @Field(() => String, {nullable: true}) otherDotDocument?: string;
  @Field(() => String, {nullable: true} ) otherDotDocumentDetail?: string;
  @Field(() => ID, { nullable: true }) otherDotDocumentFile?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}
