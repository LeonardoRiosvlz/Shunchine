import { Field, InputType, ID } from '@nestjs/graphql';
import { TranscodeStatus } from 'src/modules/transcoder/entities/transcoder.entity';
import { TranscodeOptionInput } from './transcode-option.input';

@InputType()
export class CreateTranscoderInput {
  @Field({ nullable: true }) description?: string;
  @Field(() => TranscodeStatus, { nullable: true, defaultValue: TranscodeStatus.WITHOUT_TRANSCODING }) status: TranscodeStatus;
  @Field(() => ID, { nullable: true }) user: string;
  @Field(() => ID, { nullable: true }) mediaFile?: string;
  @Field(() => TranscodeOptionInput, { nullable: true }) options?: TranscodeOptionInput;
}
