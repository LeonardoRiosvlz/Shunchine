import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

export enum AnnualVehInspDocumentType{
  ANNUAL_VEHICLE_INSPECTION_REPORT='ANNUAL_VEHICLE_INSPECTION_REPORT',
  STATE_PERMITS='STATE_PERMITS',
  NEW_MEXICO_PASSWORD='NEW_MEXICO_PASSWORD',
  OTHER_PERMIT_INFO='OTHER_PERMIT_INFO',
}


@Schema({ ...SchemaConstants, collection: 'annual-veh-insp-state-rermits' })
export class AnnualVehInspStateRermitsEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop({type:String}) documentType: AnnualVehInspDocumentType;
  @Prop() expiration?: Date;
  @Prop() expires: boolean;
  @Prop() archived?: boolean;
  @Prop() description?: string;
  @Prop() number?: string;
  @Prop() notes?: string;
}

export const AnnualVehInspStateRermitsSchema = SchemaFactory.createForClass(AnnualVehInspStateRermitsEntity);

export const AnnualVehInspStateRermitsFeature = {
  name: AnnualVehInspStateRermitsEntity.name,
  schema: AnnualVehInspStateRermitsSchema,
};
