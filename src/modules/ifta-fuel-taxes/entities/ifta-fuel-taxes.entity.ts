import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'ifta-fuel-taxes' })
export class IftaFuelTaxesEntity extends PersistentEntity {
  @Prop() iftaAccount?: string;
  @Prop() iftaAccountDetail?: string;
  @Prop() iftaAccountExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) iftaAccountFile?: string;
  @Prop() iftaApplRenewalsChanges?: string;
  @Prop() iftaApplRenewalsChangesDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) iftaApplRenewalsChangesFile?: string;
  @Prop() fuelTaxes?: string;
  @Prop() fuelTaxesDetail?: string;
  @Prop() fuelTaxesExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) fuelTaxesFile?: string;
  @Prop() otherIftaRequest?: string;
  @Prop() otherIftaRequestDetail?: string;
  @Prop() otherIftaRequestExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) otherIftaRequestFile?: string;
  @Prop() notes?: string;
}

export const IftaFuelTaxesSchema = SchemaFactory.createForClass(IftaFuelTaxesEntity);

export const IftaFuelTaxesFeature = {
  name: IftaFuelTaxesEntity.name,
  schema: IftaFuelTaxesSchema,
};
