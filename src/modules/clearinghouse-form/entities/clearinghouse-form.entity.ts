import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'clearinghouse-form' })
export class ClearinghouseFormEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop() driverName?: string;
  @Prop() driverDob?: string;
  @Prop() driversLicense?: string;
  @Prop() dot?: string;
}

export const ClearinghouseFormSchema = SchemaFactory.createForClass(ClearinghouseFormEntity);

export const ClearinghouseFormFeature = {
  name: ClearinghouseFormEntity.name,
  schema: ClearinghouseFormSchema,
};
