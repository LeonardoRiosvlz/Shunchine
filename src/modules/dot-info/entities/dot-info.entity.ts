import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

export enum DotInfoDocumentType{
  DOT='DOT',
  MC='MC',
  TAX_ID='TAX_ID',
  DOT_PIN='DOT_PIN',
  MC_PIN='MC_PIN',
  SCAC='SCAC',
  UCR_REGISTRATION_YEAR='UCR_REGISTRATION_YEAR',
  BOC_3='BOC_3',
  DOT_ROAD_INSPECTIONS='DOT_ROAD_INSPECTIONS',
  DOT_AUDITS='DOT_AUDITS',
  OTHER_DOT_DOCUMENT='OTHER_DOT_DOCUMENT',
}



@Schema({ ...SchemaConstants, collection: 'dot-info' })
export class DotInfoEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop({type:String}) documentType: DotInfoDocumentType;
  @Prop() expiration?: Date;
  @Prop() expires: boolean;
  @Prop() archived?: boolean;
  @Prop() description?: string;
  @Prop() number?: string;
  @Prop() notes?: string;
}
 
export const DotInfoSchema = SchemaFactory.createForClass(DotInfoEntity);

export const DotInfoFeature = {
  name: DotInfoEntity.name,
  schema: DotInfoSchema,
};
