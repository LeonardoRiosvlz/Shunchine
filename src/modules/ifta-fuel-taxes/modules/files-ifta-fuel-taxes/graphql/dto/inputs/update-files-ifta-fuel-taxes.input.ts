import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesIftaFuelTaxesInput } from './create-files-ifta-fuel-taxes.input';


@InputType()
export class PartialFilesIftaFuelTaxesInput extends PartialType(CreateFilesIftaFuelTaxesInput) {}

@InputType()
export class UpdateFilesIftaFuelTaxesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesIftaFuelTaxesInput)  update: PartialFilesIftaFuelTaxesInput;

}
