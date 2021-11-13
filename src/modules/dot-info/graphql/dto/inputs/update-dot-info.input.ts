import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateDotInfoInput } from './create-dot-info.input';


@InputType()
export class PartialDotInfoInput extends PartialType(CreateDotInfoInput) {}

@InputType()
export class UpdateDotInfoInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialDotInfoInput)  update: PartialDotInfoInput;

}
