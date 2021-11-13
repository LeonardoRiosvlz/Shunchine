import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'invoices-and-payments' })
export class InvoicesAndPaymentsEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const InvoicesAndPaymentsSchema = SchemaFactory.createForClass(InvoicesAndPaymentsEntity);

export const InvoicesAndPaymentsFeature = {
  name: InvoicesAndPaymentsEntity.name,
  schema: InvoicesAndPaymentsSchema,
};
