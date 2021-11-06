import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';

import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FfmpgOptionEntity } from 'src/modules/ffmpg-option/entities/ffmpg-option.entity';

@Schema({ ...SchemaConstants, collection: 'ffmpg-template' })
export class FfmpgTemplateEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
  @Prop({ type: [{ type: MSchema.Types.ObjectId, ref: () => FfmpgOptionEntity }] }) ffmpgOpts: Array<string>;

}

export const FfmpgTemplateSchema = SchemaFactory.createForClass(FfmpgTemplateEntity);

export const FfmpgTemplateFeature = {
  name: FfmpgTemplateEntity.name,
  schema: FfmpgTemplateSchema,
};
