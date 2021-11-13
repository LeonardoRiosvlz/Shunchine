import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'substance-compliance-clearinghouse' })
export class SubstanceComplianceClearinghouseEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const SubstanceComplianceClearinghouseSchema = SchemaFactory.createForClass(SubstanceComplianceClearinghouseEntity);

export const SubstanceComplianceClearinghouseFeature = {
  name: SubstanceComplianceClearinghouseEntity.name,
  schema: SubstanceComplianceClearinghouseSchema,
};
