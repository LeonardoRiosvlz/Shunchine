import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
@Schema({ ...SchemaConstants, collection: 'driver-files' })
export class DriverFilesEntity extends PersistentEntity {
  @Prop() name?: string;
  @Prop() dni?: string;
  @Prop() driveLicense?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) driveLicenseFile?: string;
  @Prop() driveLicenseExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) medicalCardFile?: string;
  @Prop() medicalCardExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) mvrFile?: string;
  @Prop() mvrExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) socialSecurityFile?: string;
  @Prop() socialSecurityExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) driverFile?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) driverSignedContractFile?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) inquiryToPreviousEmployerFile?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) drugsTestFile?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) clearingHouseFile?: string;
  @Prop() clearingHouseExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) readInspectionsNoaFile?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) otherDocuments?: string;
}

export const DriverFilesSchema = SchemaFactory.createForClass(DriverFilesEntity);

export const DriverFilesFeature = {
  name: DriverFilesEntity.name,
  schema: DriverFilesSchema,
};
