import { ModelDefinition, Prop, SchemaFactory } from '@nestjs/mongoose';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { FfmpgTemplateEntity } from 'src/modules/ffmpg-template/entities/ffmpg-template.entity';
import { ITranscodeOption } from '../../interfaces/ITranscode';


export enum Resolution {
  SD = '640x480',
  QHD = '960x540',
  HD = '1280x368',
  FHD = '1920x1080',
  _2K = '2048×1080',
  UHD = '3840x2160',
  _4k_UHDV = '3840×2160',
  _4K_CINEMA = '4096×2160',
  _4K_WHXGA = '5120x3200',

}

export class TranscodeOptionsEntity implements ITranscodeOption {
  @Prop({ _id: false })
  @Prop({ type: String }) resolution: Resolution;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FfmpgTemplateEntity }) template?: string;
}

export const TranscodeOptionsSchema = SchemaFactory.createForClass(TranscodeOptionsEntity);

export const TranscodeOptionsFeature: ModelDefinition = {
  name: TranscodeOptionsEntity.name,
  schema: TranscodeOptionsSchema,
};
