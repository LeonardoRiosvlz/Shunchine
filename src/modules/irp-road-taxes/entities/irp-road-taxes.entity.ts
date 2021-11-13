import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'irp-road-taxes' })
export class IrpRoadTaxesEntity extends PersistentEntity {
  @Prop() irpAccount?: string;
  @Prop() irpAccountDetail?: string;
  @Prop() irpExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) irpFile?: string;
  @Prop() certificateTitle?: string;
  @Prop() certificateTitleDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) certificateTitleFile?: string;
  @Prop() tag?: string;
  @Prop() tagDetail?: string;
  @Prop() tagExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) tagFile?: string;
  @Prop() roadTax?: string;
  @Prop() roadTaxDetail?: string;
  @Prop() roadTaxExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) roadTaxFile?: string;
  @Prop() leaseAgreement?: string;
  @Prop() leaseAgreementDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) leaseAgreementFile?: string;
  @Prop() irpApplicationsRenewals?: string;
  @Prop() irpApplicationsRenewalsDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) irpApplicationsRenewalsFile?: string;
  @Prop() otherIrpRequest?: string;
  @Prop() otherIrpRequestDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) otherIrpRequestFile?: string;
  @Prop() notes?: string;
}

export const IrpRoadTaxesSchema = SchemaFactory.createForClass(IrpRoadTaxesEntity);

export const IrpRoadTaxesFeature = {
  name: IrpRoadTaxesEntity.name,
  schema: IrpRoadTaxesSchema,
};
