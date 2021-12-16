import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

@Schema({ ...SchemaConstants, collection: 'financed-equipment' })
export class FinancedEquipmentEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop() saleAmount?: string;
  @Prop() saleDate?: Date;
  @Prop() monthlyPayment?: string;
  @Prop() lastPaymentDate?: Date;
  @Prop() truckVin?: string;
}

export const FinancedEquipmentSchema = SchemaFactory.createForClass(FinancedEquipmentEntity);

export const FinancedEquipmentFeature = {
  name: FinancedEquipmentEntity.name,
  schema: FinancedEquipmentSchema,
};
