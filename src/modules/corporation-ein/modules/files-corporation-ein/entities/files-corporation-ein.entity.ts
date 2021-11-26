import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { CorporationEinEntity } from 'src/modules/corporation-ein/entities/corporation-ein.entity';
import { Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';

@Schema({ ...SchemaConstants, collection: 'files-corporation-ein' })
export class FilesCorporationEinEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => CorporationEinEntity}) corporationEin?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesCorporationEinSchema = SchemaFactory.createForClass(FilesCorporationEinEntity);

export const FilesCorporationEinFeature = {
  name: FilesCorporationEinEntity.name,
  schema: FilesCorporationEinSchema,
};
