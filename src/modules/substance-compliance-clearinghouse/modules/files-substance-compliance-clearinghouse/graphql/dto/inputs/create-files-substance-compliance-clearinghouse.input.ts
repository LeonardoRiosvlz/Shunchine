import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class CreateFilesSubstanceComplianceClearinghouseInput {
  @Field(() => ID, {nullable: true} )  substanceComplianceClearinghouse?: string;
  @Field(() => String, )  name?: string;
  @Field(() => ID, { nullable: true }) file?: string;
}
