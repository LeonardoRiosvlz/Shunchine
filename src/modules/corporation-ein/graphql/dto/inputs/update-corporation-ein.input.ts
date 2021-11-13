import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateCorporationEinInput } from './create-corporation-ein.input';


@InputType()
export class PartialCorporationEinInput extends PartialType(CreateCorporationEinInput) {}

@InputType()
export class UpdateCorporationEinInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialCorporationEinInput)  update: PartialCorporationEinInput;

}
