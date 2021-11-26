import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { IftaFuelTaxesEntity } from 'src/modules/ifta-fuel-taxes/entities/ifta-fuel-taxes.entity';
import { Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';


@Schema({ ...SchemaConstants, collection: 'files-ifta-fuel-taxes' })
export class FilesIftaFuelTaxesEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => IftaFuelTaxesEntity}) iftaFuelTaxes?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesIftaFuelTaxesSchema = SchemaFactory.createForClass(FilesIftaFuelTaxesEntity);

export const FilesIftaFuelTaxesFeature = {
  name: FilesIftaFuelTaxesEntity.name,
  schema: FilesIftaFuelTaxesSchema,
};
