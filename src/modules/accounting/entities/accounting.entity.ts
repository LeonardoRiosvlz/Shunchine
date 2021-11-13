import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'accounting' })
export class AccountingEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const AccountingSchema = SchemaFactory.createForClass(AccountingEntity);

export const AccountingFeature = {
  name: AccountingEntity.name,
  schema: AccountingSchema,
};
