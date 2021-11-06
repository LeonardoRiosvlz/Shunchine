import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { TranscodeOptionsEntity } from './schemas/transcode-options.schema';

export enum TranscodeStatus {
  TRANSCODED = 'TRANSCODED',
  WITHOUT_TRANSCODING = 'WITHOUT_TRANSCODING',
  QUEUED_TO_TRANSCODE = 'QUEUED_TO_TRANSCODE',
  TRANSCODING = 'TRANSCODING',
  TRANSCODE_ERROR = 'TRANSCODE_ERROR'
}


@Schema({ ...SchemaConstants, collection: 'transcoder' })
export class TranscoderEntity extends PersistentEntity {
  @Prop() description?: string;
  @Prop() folder?: string;
  @Prop({ type: String }) status: TranscodeStatus;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => UserEntity }) user: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) mediaFile?: string;
  @Prop({ type: TranscodeOptionsEntity }) options?: TranscodeOptionsEntity;

}

export const TranscoderSchema = SchemaFactory.createForClass(TranscoderEntity);

export const TranscoderFeature = {
  name: TranscoderEntity.name,
  schema: TranscoderSchema,
};
