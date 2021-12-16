import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'road-taxes-form' })
export class RoadTaxesFormEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop() taxId?: string;
  @Prop() vehicleTitleOwnerName?: string;
  @Prop() address?: string;
  @Prop() unit?: string;
  @Prop() vin?: string;
  @Prop() unitYear?: string;
  @Prop() monthFirstUsed?: string;
}

export const RoadTaxesFormSchema = SchemaFactory.createForClass(RoadTaxesFormEntity);

export const RoadTaxesFormFeature = {
  name: RoadTaxesFormEntity.name,
  schema: RoadTaxesFormSchema,
};
 