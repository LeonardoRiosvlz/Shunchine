import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { IftaFuelTaxesEntity } from 'src/modules/ifta-fuel-taxes/entities/ifta-fuel-taxes.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { Schema as MSchema } from 'mongoose';


@Schema({ ...SchemaConstants, collection: 'files-dot-info' })
export class FilesDotInfoEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => IftaFuelTaxesEntity}) dotInfo?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesDotInfoSchema = SchemaFactory.createForClass(FilesDotInfoEntity);

export const FilesDotInfoFeature = {
  name: FilesDotInfoEntity.name,
  schema: FilesDotInfoSchema,
};
