import { Field, ID, InputType, PartialType, OmitType } from '@nestjs/graphql';
import { CreateTranscoderInput } from './create-transcoder.input';


@InputType()
export class PartialTranscoderInput extends PartialType(OmitType(CreateTranscoderInput, ['user', 'status'])) { }

@InputType()
export class UpdateTranscoderInput {
  @Field(() => ID,) entityId: string;
  @Field(() => PartialTranscoderInput) update: PartialTranscoderInput;
}
