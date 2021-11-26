import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

export enum IftaDocumentType{
  IFTA_ACCOUNT='IFTA_ACCOUNT',
  IFTA_APPLICATION_RENEWALS_CHANGE='IFTA_APPLICATION_RENEWALS_CHANGE',
  FUEL_TAXES='FUEL_TAXES',
  OTHER_IFTA_REQUEST='OTHER_IFTA_REQUEST',
}



@Schema({ ...SchemaConstants, collection: 'ifta-fuel-taxes' })
export class IftaFuelTaxesEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop({type:String}) documentType: IftaDocumentType;
  @Prop() expiration: Date;
  @Prop() expires: boolean;
  @Prop() archived?: boolean;
  @Prop() description?: string;
  @Prop() number?: string;
  @Prop() notes?: string;
}

export const IftaFuelTaxesSchema = SchemaFactory.createForClass(IftaFuelTaxesEntity);

export const IftaFuelTaxesFeature = {
  name: IftaFuelTaxesEntity.name,
  schema: IftaFuelTaxesSchema,
};
