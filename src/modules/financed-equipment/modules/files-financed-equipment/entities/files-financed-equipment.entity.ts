import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FinancedEquipmentEntity } from 'src/modules/financed-equipment/entities/financed-equipment.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'files-financed-equipment' })
export class FilesFinancedEquipmentEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FinancedEquipmentEntity}) financedEquipment?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesFinancedEquipmentSchema = SchemaFactory.createForClass(FilesFinancedEquipmentEntity);

export const FilesFinancedEquipmentFeature = {
  name: FilesFinancedEquipmentEntity.name,
  schema: FilesFinancedEquipmentSchema,
};
 