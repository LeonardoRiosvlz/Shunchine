import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateDriverFilesInput } from './create-driver-files.input';


@InputType()
export class PartialDriverFilesInput extends PartialType(CreateDriverFilesInput) {}

@InputType()
export class UpdateDriverFilesInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialDriverFilesInput)  update: PartialDriverFilesInput;

}
