import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'dot-info' })
export class DotInfoEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const DotInfoSchema = SchemaFactory.createForClass(DotInfoEntity);

export const DotInfoFeature = {
  name: DotInfoEntity.name,
  schema: DotInfoSchema,
};
