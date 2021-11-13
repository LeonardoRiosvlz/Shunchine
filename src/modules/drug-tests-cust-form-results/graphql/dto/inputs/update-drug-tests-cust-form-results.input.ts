import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateDrugTestsCustFormResultsInput } from './create-drug-tests-cust-form-results.input';


@InputType()
export class PartialDrugTestsCustFormResultsInput extends PartialType(CreateDrugTestsCustFormResultsInput) {}

@InputType()
export class UpdateDrugTestsCustFormResultsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialDrugTestsCustFormResultsInput)  update: PartialDrugTestsCustFormResultsInput;

}
