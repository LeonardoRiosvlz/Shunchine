import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';



export enum IrpRoadTaxesType{
  IRP_ACCOUNT='IRP_ACCOUNT',
  CERTIFICATE_OF_TITLE='CERTIFICATE_OF_TITLE',
  ROAD_TAX_2290='ROAD_TAX_2290',
  LEASE_AGREEMENT='LEASE_AGREEMENT',
  IRP_APPLICATIONS_RENEWALS='IRP_APPLICATIONS_RENEWALS',
  TAG='TAG',
  OTHER_IRP_REQUEST='OTHER_IRP_REQUEST',

}


@Schema({ ...SchemaConstants, collection: 'irp-road-taxes' })
export class IrpRoadTaxesEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop({type:String}) documentType: IrpRoadTaxesType;
  @Prop() expiration?: Date;
  @Prop() expires: boolean;
  @Prop() archived?: boolean;
  @Prop() description?: string;
  @Prop() number?: string;
  @Prop() notes?: string;
}

export const IrpRoadTaxesSchema = SchemaFactory.createForClass(IrpRoadTaxesEntity);

export const IrpRoadTaxesFeature = {
  name: IrpRoadTaxesEntity.name,
  schema: IrpRoadTaxesSchema,
};
