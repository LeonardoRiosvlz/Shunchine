import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesAnnualVehIspInput {
  @Field(() => ID, {nullable: true} )  annualVehInsp?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
