import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { Schema as MSchema } from 'mongoose';
import { SubstanceComplianceClearinghouseEntity } from 'src/modules/substance-compliance-clearinghouse/entities/substance-compliance-clearinghouse.entity';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';

@Schema({ ...SchemaConstants, collection: 'files-substance-compliance-clearinghouse' })
export class FilesSubstanceComplianceClearinghouseEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => SubstanceComplianceClearinghouseEntity}) substanceComplianceClearinghouse?: string;
  @Prop() name?: string;
  @Prop({ type: MSchema.Types.ObjectId, ref: () => FilesEntity }) file?: string;
}

export const FilesSubstanceComplianceClearinghouseSchema = SchemaFactory.createForClass(FilesSubstanceComplianceClearinghouseEntity);

export const FilesSubstanceComplianceClearinghouseFeature = {
  name: FilesSubstanceComplianceClearinghouseEntity.name,
  schema: FilesSubstanceComplianceClearinghouseSchema,
};
