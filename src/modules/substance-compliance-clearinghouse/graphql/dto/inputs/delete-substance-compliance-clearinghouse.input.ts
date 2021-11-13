import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteSubstanceComplianceClearinghouseInput {
  @Field(() => ID, )  entityId: string;
}
