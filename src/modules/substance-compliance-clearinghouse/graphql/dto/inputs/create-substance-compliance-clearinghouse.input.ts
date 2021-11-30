import { Field, InputType, ID } from '@nestjs/graphql';
import { SubstanceComplianceDocumentType } from 'src/modules/substance-compliance-clearinghouse/entities/substance-compliance-clearinghouse.entity';

@InputType()
export class CreateSubstanceComplianceClearinghouseInput {
  @Field(() => ID, {nullable: true}) client: string;
  @Field(() => SubstanceComplianceDocumentType )  documentType: SubstanceComplianceDocumentType;
  @Field(() => Date, {nullable: true} )  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean, {nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
}
