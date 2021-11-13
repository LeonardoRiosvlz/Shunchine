import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'yard-rental' })
export class YardRentalEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const YardRentalSchema = SchemaFactory.createForClass(YardRentalEntity);

export const YardRentalFeature = {
  name: YardRentalEntity.name,
  schema: YardRentalSchema,
};
