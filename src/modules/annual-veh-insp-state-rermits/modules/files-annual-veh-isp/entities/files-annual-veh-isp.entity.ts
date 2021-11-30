import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { AnnualVehInspStateRermitsEntity } from 'src/modules/annual-veh-insp-state-rermits/entities/annual-veh-insp-state-rermits.entity';
import { Schema as MSchema } from 'mongoose';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';


@Schema({ ...SchemaConstants, collection: 'files-annual-veh-isp' })
export class FilesAnnualVehIspEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => AnnualVehInspStateRermitsEntity}) annualVehInsp?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesAnnualVehIspSchema = SchemaFactory.createForClass(FilesAnnualVehIspEntity);

export const FilesAnnualVehIspFeature = {
  name: FilesAnnualVehIspEntity.name,
  schema: FilesAnnualVehIspSchema,
};
