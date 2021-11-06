import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFfmpgOptionInput } from './create-ffmpg-option.input';


@InputType()
export class PartialFfmpgOptionInput extends PartialType(CreateFfmpgOptionInput) {}

@InputType()
export class UpdateFfmpgOptionInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFfmpgOptionInput)  update: PartialFfmpgOptionInput;

}
