import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';

@Schema({ ...SchemaConstants, collection: 'dot-info' })
export class DotInfoEntity extends PersistentEntity {
  @Prop() dot?: string;
  @Prop() dotDetail?: string;
  @Prop() dotExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) dotFile?: string;
  @Prop() mc?: string;
  @Prop() mcDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) mcFile?: string;
  @Prop() taxId?: string;
  @Prop() taxIdDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) taxIdFile?: string;
  @Prop() dotPin?: string;
  @Prop() dotPinDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) dotPinFile?: string;
  @Prop() mcPin?: string;
  @Prop() mcPinDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) mcPinFile?: string;
  @Prop() scac?: string;
  @Prop() scacDetail?: string;
  @Prop() scacExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) scacFile?: string;
  @Prop() ucr?: string;
  @Prop() ucrDetail?: string;
  @Prop() ucrExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) ucrFile?: string;
  @Prop() bocThree?: string;
  @Prop() bocThreeDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) bocThreeFile?: string;
  @Prop() docRoadInspection?: string;
  @Prop() docRoadInspectionDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) docRoadInspectionFile?: string;
  @Prop() docAudits?: string;
  @Prop() docAuditsDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) docAuditsFile?: string;
  @Prop() otherDotDocument?: string;
  @Prop() otherDotDocumentDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) otherDotDocumentFile?: string;
  @Prop() notes?: string;
}
 
export const DotInfoSchema = SchemaFactory.createForClass(DotInfoEntity);

export const DotInfoFeature = {
  name: DotInfoEntity.name,
  schema: DotInfoSchema,
};
