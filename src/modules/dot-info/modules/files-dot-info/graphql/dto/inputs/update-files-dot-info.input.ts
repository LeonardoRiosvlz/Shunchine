import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesDotInfoInput } from './create-files-dot-info.input';


@InputType()
export class PartialFilesDotInfoInput extends PartialType(CreateFilesDotInfoInput) {}

@InputType()
export class UpdateFilesDotInfoInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesDotInfoInput)  update: PartialFilesDotInfoInput;

}
