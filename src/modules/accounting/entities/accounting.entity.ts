import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

@Schema({ ...SchemaConstants, collection: 'accounting' })
export class AccountingEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client?: string;
  @Prop() date: Date;
  @Prop() paymentAmount: number;
  @Prop() achDate: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const AccountingSchema = SchemaFactory.createForClass(AccountingEntity);

export const AccountingFeature = {
  name: AccountingEntity.name,
  schema: AccountingSchema,
};
 