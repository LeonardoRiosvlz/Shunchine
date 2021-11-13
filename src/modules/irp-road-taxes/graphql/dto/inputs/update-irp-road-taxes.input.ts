import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateIrpRoadTaxesInput } from './create-irp-road-taxes.input';


@InputType()
export class PartialIrpRoadTaxesInput extends PartialType(CreateIrpRoadTaxesInput) {}

@InputType()
export class UpdateIrpRoadTaxesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialIrpRoadTaxesInput)  update: PartialIrpRoadTaxesInput;

}
