import { Field, InputType, ID } from '@nestjs/graphql';
import { Resolution } from 'src/modules/transcoder/entities/schemas/transcode-options.schema';
import { ITranscodeOption } from 'src/modules/transcoder/interfaces/ITranscode';

@InputType()
export class TranscodeOptionInput implements ITranscodeOption {
  @Field(() => Resolution) resolution: Resolution;
  @Field(() => ID, { nullable: true }) template?: string;
}
