import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesIrpRoadTaxesInput } from './create-files-irp-road-taxes.input';


@InputType()
export class PartialFilesIrpRoadTaxesInput extends PartialType(CreateFilesIrpRoadTaxesInput) {}

@InputType()
export class UpdateFilesIrpRoadTaxesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesIrpRoadTaxesInput)  update: PartialFilesIrpRoadTaxesInput;

}
