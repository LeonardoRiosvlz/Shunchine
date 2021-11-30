import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { TrailerRentalEntity } from 'src/modules/trailer-rental/entities/trailer-rental.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'files-trailer-rental' })
export class FilesTrailerRentalEntity extends PersistentEntity {
  
  @Prop({ type: MSchema.Types.ObjectId, ref: () => TrailerRentalEntity}) trailerRental?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesTrailerRentalSchema = SchemaFactory.createForClass(FilesTrailerRentalEntity);

export const FilesTrailerRentalFeature = {
  name: FilesTrailerRentalEntity.name,
  schema: FilesTrailerRentalSchema,
};
