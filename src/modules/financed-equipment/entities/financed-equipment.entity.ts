import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'financed-equipment' })
export class FinancedEquipmentEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const FinancedEquipmentSchema = SchemaFactory.createForClass(FinancedEquipmentEntity);

export const FinancedEquipmentFeature = {
  name: FinancedEquipmentEntity.name,
  schema: FinancedEquipmentSchema,
};
