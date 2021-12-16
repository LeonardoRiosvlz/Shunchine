import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateClearinghouseFormInput } from './create-clearinghouse-form.input';


@InputType()
export class PartialClearinghouseFormInput extends PartialType(CreateClearinghouseFormInput) {}

@InputType()
export class UpdateClearinghouseFormInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialClearinghouseFormInput)  update: PartialClearinghouseFormInput;

}
