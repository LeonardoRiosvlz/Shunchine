import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MSchema } from 'mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { TaxesEntity } from 'src/modules/taxes/entities/taxes.entity';

@Schema({ ...SchemaConstants, collection: 'client' })
export class ClientEntity extends PersistentEntity {
  @Prop() clientSince?: string;
  @Prop() companyName?: string;
  @Prop() customerName?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => TaxesEntity}) tax: string;
  @Prop() mc?: string;
  @Prop() ofTrucks?: string;
  @Prop() street?: string;
  @Prop() city?: string;
  @Prop() stateProvince?: string;
  @Prop() zipPostalCode?: string;
  @Prop() contacEmail?: string;
  @Prop() conactOficePhone?: string;
  @Prop() mobilePhone?: string;
}

export const ClientSchema = SchemaFactory.createForClass(ClientEntity);

export const ClientFeature = {
  name: ClientEntity.name,
  schema: ClientSchema,
};
