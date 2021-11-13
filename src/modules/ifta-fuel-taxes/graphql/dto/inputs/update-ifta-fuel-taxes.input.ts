import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateIftaFuelTaxesInput } from './create-ifta-fuel-taxes.input';


@InputType()
export class PartialIftaFuelTaxesInput extends PartialType(CreateIftaFuelTaxesInput) {}

@InputType()
export class UpdateIftaFuelTaxesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialIftaFuelTaxesInput)  update: PartialIftaFuelTaxesInput;

}
