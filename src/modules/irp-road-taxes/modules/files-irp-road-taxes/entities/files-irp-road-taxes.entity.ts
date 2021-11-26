import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { IrpRoadTaxesType } from 'src/modules/irp-road-taxes/entities/irp-road-taxes.entity';

@Schema({ ...SchemaConstants, collection: 'files-irp-road-taxes' })
export class FilesIrpRoadTaxesEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => IrpRoadTaxesType}) irpRoadTaxes?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesIrpRoadTaxesSchema = SchemaFactory.createForClass(FilesIrpRoadTaxesEntity);

export const FilesIrpRoadTaxesFeature = {
  name: FilesIrpRoadTaxesEntity.name,
  schema: FilesIrpRoadTaxesSchema,
};
