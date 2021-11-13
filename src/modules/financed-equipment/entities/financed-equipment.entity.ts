import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'financed-equipment' })
export class FinancedEquipmentEntity extends PersistentEntity {
  @Prop() saleAmount: string;
  @Prop() saleDate: string;
  @Prop() monthlyPayment: string;
  @Prop() lastPaymentDate: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) financeAgreementDocuments?: string;
  @Prop() repairsCostReceiptsText: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) repairsCostReceiptsFile?: string;
  @Prop() truckVin: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) payOffList?: string;
}

export const FinancedEquipmentSchema = SchemaFactory.createForClass(FinancedEquipmentEntity);

export const FinancedEquipmentFeature = {
  name: FinancedEquipmentEntity.name,
  schema: FinancedEquipmentSchema,
};
