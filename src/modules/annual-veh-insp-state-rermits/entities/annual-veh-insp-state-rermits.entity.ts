import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'annual-veh-insp-state-rermits' })
export class AnnualVehInspStateRermitsEntity extends PersistentEntity {
  @Prop() annualVehInspReport?: string;
  @Prop() annualVehInspReportUnbound?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) annualVehInspReportFile?: string;
  @Prop() statePermits?: string;
  @Prop() statePermitsUnbound?: string;
  @Prop() statePermitsExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) statePermitsFile?: string;
  @Prop() newMexicoLogin?: string;
  @Prop() newMexicoLoginUnbound?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) newMexicoLoginFile?: string;
  @Prop() newMexicoPassword?: string;
  @Prop() newMexicoPasswordUnbound?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) newMexicoPasswordFile?: string;
  @Prop() otherPermitInfo?: string;
  @Prop() otherPermitInfoUnbound?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) otherPermitInfoFile?: string;
  @Prop() notes?: string;
}

export const AnnualVehInspStateRermitsSchema = SchemaFactory.createForClass(AnnualVehInspStateRermitsEntity);

export const AnnualVehInspStateRermitsFeature = {
  name: AnnualVehInspStateRermitsEntity.name,
  schema: AnnualVehInspStateRermitsSchema,
};
