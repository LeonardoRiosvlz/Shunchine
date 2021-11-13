import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'trailer-rental' })
export class TrailerRentalEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const TrailerRentalSchema = SchemaFactory.createForClass(TrailerRentalEntity);

export const TrailerRentalFeature = {
  name: TrailerRentalEntity.name,
  schema: TrailerRentalSchema,
};
