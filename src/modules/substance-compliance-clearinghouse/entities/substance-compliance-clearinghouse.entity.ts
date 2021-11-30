import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

export enum SubstanceComplianceDocumentType{
  DRUG_RANDOM_ENROLLMENT='DRUG_RANDOM_ENROLLMENT',
  REASONABLE_SUSPICIOUS='REASONABLE_SUSPICIOUS',
  CLEARINGHOUSE_LOG_IN='CLEARINGHOUSE_LOG_IN',
  CLEARINGHOUSE_PASSWORD='CLEARINGHOUSE_PASSWORD',
  CLEARING_REG_QUERIES='CLEARING_REG_QUERIES',
  OTHER_SUBSTANCE_REQUEST='OTHER_SUBSTANCE_REQUEST',
}


@Schema({ ...SchemaConstants, collection: 'substance-compliance-clearinghouse' })
export class SubstanceComplianceClearinghouseEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop({type:String}) documentType: SubstanceComplianceDocumentType;
  @Prop() expiration?: Date;
  @Prop() expires: boolean;
  @Prop() archived?: boolean;
  @Prop() description?: string;
  @Prop() number?: string;
  @Prop() notes?: string;
}

export const SubstanceComplianceClearinghouseSchema = SchemaFactory.createForClass(SubstanceComplianceClearinghouseEntity);

export const SubstanceComplianceClearinghouseFeature = {
  name: SubstanceComplianceClearinghouseEntity.name,
  schema: SubstanceComplianceClearinghouseSchema,
};
