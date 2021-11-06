import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { TranscodeStatus } from 'src/modules/transcoder/entities/transcoder.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { TranscodeOptionResponse } from './transcode-option.response';

registerEnumType(TranscodeStatus, {name: 'TranscodeStatus'})


@ObjectType()
export class TranscoderResponse {
  @Field(() => ID) id: string;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) folder?: string;
  @Field(() => TranscodeStatus) status: TranscodeStatus;
  @Field(() => SolvedEntityResponse, { nullable: true }) user: SolvedEntityResponse;
  @Field(() => CloudFileResponse, { nullable: true }) mediaFile?: CloudFileResponse;
  @Field(() => TranscodeOptionResponse, { nullable: true }) options?: TranscodeOptionResponse;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}
