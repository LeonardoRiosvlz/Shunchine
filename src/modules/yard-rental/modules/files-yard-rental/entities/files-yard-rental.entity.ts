import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { YardRentalEntity } from 'src/modules/yard-rental/entities/yard-rental.entity';
import { Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';


@Schema({ ...SchemaConstants, collection: 'files-yard-rental' })
export class FilesYardRentalEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => YardRentalEntity}) yardRental?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesYardRentalSchema = SchemaFactory.createForClass(FilesYardRentalEntity);

export const FilesYardRentalFeature = {
  name: FilesYardRentalEntity.name,
  schema: FilesYardRentalSchema,
};
