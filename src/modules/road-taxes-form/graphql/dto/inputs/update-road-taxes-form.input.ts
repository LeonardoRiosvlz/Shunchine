import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateRoadTaxesFormInput } from './create-road-taxes-form.input';


@InputType()
export class PartialRoadTaxesFormInput extends PartialType(CreateRoadTaxesFormInput) {}

@InputType()
export class UpdateRoadTaxesFormInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialRoadTaxesFormInput)  update: PartialRoadTaxesFormInput;

}
