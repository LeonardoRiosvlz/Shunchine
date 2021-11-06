import { Field, InputType, ID } from '@nestjs/graphql';
import { TranscodeStatus } from 'src/modules/transcoder/entities/transcoder.entity';
import { TranscodeOptionInput } from './transcode-option.input';

@InputType()
export class TranscodeInput {
  @Field(() => ID, ) entityId: string;
  @Field(() => TranscodeOptionInput, { nullable: true }) options?: TranscodeOptionInput;
}
