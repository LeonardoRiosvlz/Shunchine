import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';

@Schema({ ...SchemaConstants, collection: 'drug-tests-cust-form-results' })
export class DrugTestsCustFormResultsEntity extends PersistentEntity {
  @Prop() name: string;
  @Prop() description?: string;
}

export const DrugTestsCustFormResultsSchema = SchemaFactory.createForClass(DrugTestsCustFormResultsEntity);

export const DrugTestsCustFormResultsFeature = {
  name: DrugTestsCustFormResultsEntity.name,
  schema: DrugTestsCustFormResultsSchema,
};
