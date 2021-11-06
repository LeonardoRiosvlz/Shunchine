import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFfmpgTemplateInput } from './create-ffmpg-template.input';


@InputType()
export class PartialFfmpgTemplateInput extends PartialType(CreateFfmpgTemplateInput) {}

@InputType()
export class UpdateFfmpgTemplateInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFfmpgTemplateInput)  update: PartialFfmpgTemplateInput;

}
