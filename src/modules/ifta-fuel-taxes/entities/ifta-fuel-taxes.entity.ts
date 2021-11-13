import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'ifta-fuel-taxes' })
export class IftaFuelTaxesEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const IftaFuelTaxesSchema = SchemaFactory.createForClass(IftaFuelTaxesEntity);

export const IftaFuelTaxesFeature = {
  name: IftaFuelTaxesEntity.name,
  schema: IftaFuelTaxesSchema,
};
