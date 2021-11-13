import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateAccountingInput } from './create-accounting.input';


@InputType()
export class PartialAccountingInput extends PartialType(CreateAccountingInput) {}

@InputType()
export class UpdateAccountingInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialAccountingInput)  update: PartialAccountingInput;

}
