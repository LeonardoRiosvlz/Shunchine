import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesSubstanceComplianceClearinghouseInput {
  @Field(() => ID, )  entityId: string;
}
