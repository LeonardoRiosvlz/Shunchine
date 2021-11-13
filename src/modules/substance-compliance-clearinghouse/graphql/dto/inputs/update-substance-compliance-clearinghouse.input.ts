import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateSubstanceComplianceClearinghouseInput } from './create-substance-compliance-clearinghouse.input';


@InputType()
export class PartialSubstanceComplianceClearinghouseInput extends PartialType(CreateSubstanceComplianceClearinghouseInput) {}

@InputType()
export class UpdateSubstanceComplianceClearinghouseInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialSubstanceComplianceClearinghouseInput)  update: PartialSubstanceComplianceClearinghouseInput;

}
