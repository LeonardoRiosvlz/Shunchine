import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';


@Schema({ ...SchemaConstants, collection: 'substance-compliance-clearinghouse' })
export class SubstanceComplianceClearinghouseEntity extends PersistentEntity {
  @Prop() drugRandomEnrollment?: string;
  @Prop() drugRandomEnrollmentDetail?: string;
  @Prop() drugRandomEnrollmentExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) drugRandomEnrollmentFile?: string;
  @Prop() reasonableSuspicious?: string;
  @Prop() reasonableSuspiciousDetail?: string;
  @Prop() reasonableSuspiciousExpiration?: Date;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) reasonableSuspiciousFile?: string;
  @Prop() clearingHouseLogin?: string;
  @Prop() clearingHouseLoginDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) clearingHouseLoginFile?: string;
  @Prop() clearingHousePassword?: string;
  @Prop() clearingHousePasswordDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) clearingHousePasswordFile?: string;
  @Prop() clearingHouseRegQueries?: string;
  @Prop() clearingHouseRegQueriesDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) clearingHouseRegQueriesFile?: string;
  @Prop() otherSubstanceRequest?: string;
  @Prop() otherSubstanceRequestDetail?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) otherSubstanceRequestFile?: string;
  @Prop() notes?: string;
}

export const SubstanceComplianceClearinghouseSchema = SchemaFactory.createForClass(SubstanceComplianceClearinghouseEntity);

export const SubstanceComplianceClearinghouseFeature = {
  name: SubstanceComplianceClearinghouseEntity.name,
  schema: SubstanceComplianceClearinghouseSchema,
};
