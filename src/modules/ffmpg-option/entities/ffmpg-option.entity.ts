import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'ffmpg-option' })
export class FfmpgOptionEntity extends PersistentEntity {
  @Prop() option: string;
  @Prop() default: boolean;
  @Prop() description?: string;
}

export const FfmpgOptionSchema = SchemaFactory.createForClass(FfmpgOptionEntity);

export const FfmpgOptionFeature = {
  name: FfmpgOptionEntity.name,
  schema: FfmpgOptionSchema,
};
