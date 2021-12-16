import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesFinancedEquipmentInput } from './create-files-financed-equipment.input';


@InputType()
export class PartialFilesFinancedEquipmentInput extends PartialType(CreateFilesFinancedEquipmentInput) {}

@InputType()
export class UpdateFilesFinancedEquipmentInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesFinancedEquipmentInput)  update: PartialFilesFinancedEquipmentInput;

}
