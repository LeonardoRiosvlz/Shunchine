import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFinancedEquipmentInput } from './create-financed-equipment.input';


@InputType()
export class PartialFinancedEquipmentInput extends PartialType(CreateFinancedEquipmentInput) {}

@InputType()
export class UpdateFinancedEquipmentInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFinancedEquipmentInput)  update: PartialFinancedEquipmentInput;

}
