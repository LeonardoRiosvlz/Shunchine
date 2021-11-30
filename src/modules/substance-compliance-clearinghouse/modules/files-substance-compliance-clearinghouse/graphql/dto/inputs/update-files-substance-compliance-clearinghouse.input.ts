import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesSubstanceComplianceClearinghouseInput } from './create-files-substance-compliance-clearinghouse.input';


@InputType()
export class PartialFilesSubstanceComplianceClearinghouseInput extends PartialType(CreateFilesSubstanceComplianceClearinghouseInput) {}

@InputType()
export class UpdateFilesSubstanceComplianceClearinghouseInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesSubstanceComplianceClearinghouseInput)  update: PartialFilesSubstanceComplianceClearinghouseInput;

}
