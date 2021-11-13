import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateAnnualVehInspStateRermitsInput {
  @Field(() => String, {nullable: true})  annualVehInspReport?: string;
  @Field(() => String, {nullable: true} )  annualVehInspReportUnbound?: string;
  @Field(() => ID, { nullable: true }) annualVehInspReportFile?: string;
  @Field(() => String, {nullable: true})  statePermits?: string;
  @Field(() => String, {nullable: true} )  statePermitsUnbound?: string;
  @Field(() => Date, {nullable: true} )  statePermitsExpiration?: Date;
  @Field(() => ID, { nullable: true }) statePermitsFile?: string;
  @Field(() => String, {nullable: true})  newMexicoLogin?: string;
  @Field(() => String, {nullable: true} )  newMexicoLoginUnbound?: string;
  @Field(() => ID, { nullable: true }) newMexicoLoginFile?: string;
  @Field(() => String, {nullable: true})  newMexicoPassword?: string;
  @Field(() => String, {nullable: true} )  newMexicoPasswordUnbound?: string;
  @Field(() => ID, { nullable: true }) newMexicoPasswordFile?: string;
  @Field(() => String, {nullable: true})  otherPermitInfo?: string;
  @Field(() => String, {nullable: true} )  otherPermitInfoUnbound?: string;
  @Field(() => ID, { nullable: true }) otherPermitInfoFile?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}
