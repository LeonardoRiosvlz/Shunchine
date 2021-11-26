import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesCorporationEinInput } from './create-files-corporation-ein.input';


@InputType()
export class PartialFilesCorporationEinInput extends PartialType(CreateFilesCorporationEinInput) {}

@InputType()
export class UpdateFilesCorporationEinInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesCorporationEinInput)  update: PartialFilesCorporationEinInput;

}
