import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';


export enum DocumentType{
  ARTICLES_OF_INCORPORATION='ARTICLES_OF_INCORPORATION',
  EIN_IRS='EIN_IRS',
  OWNER_DRIVER_LICENSE='OWNER_DRIVER_LICENSE',
  OWNER_SOCIAL_SECURITY_NUMBER='OWNER_SOCIAL_SECURITY_NUMBER',
}


@Schema({ ...SchemaConstants, collection: 'corporation-ein' })
export class CorporationEinEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop({type:String}) documentType: DocumentType;
  @Prop() expiration: Date;
  @Prop() expires: boolean;
  @Prop() archived?: boolean;
  @Prop() description?: string;
  @Prop() number?: string;
}

export const CorporationEinSchema = SchemaFactory.createForClass(CorporationEinEntity);

export const CorporationEinFeature = {
  name: CorporationEinEntity.name,
  schema: CorporationEinSchema,
};
