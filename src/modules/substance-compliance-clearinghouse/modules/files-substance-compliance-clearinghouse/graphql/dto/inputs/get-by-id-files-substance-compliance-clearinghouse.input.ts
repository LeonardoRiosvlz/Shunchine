import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFilesSubstanceComplianceClearinghouseInput {
  @Field(() => ID, )  entity__Id: string;
}
