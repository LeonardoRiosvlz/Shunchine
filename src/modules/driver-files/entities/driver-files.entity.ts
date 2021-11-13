import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'driver-files' })
export class DriverFilesEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const DriverFilesSchema = SchemaFactory.createForClass(DriverFilesEntity);

export const DriverFilesFeature = {
  name: DriverFilesEntity.name,
  schema: DriverFilesSchema,
};
