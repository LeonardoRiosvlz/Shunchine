import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { SubstanceComplianceDocumentType } from 'src/modules/substance-compliance-clearinghouse/entities/substance-compliance-clearinghouse.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(SubstanceComplianceDocumentType, { name: 'SubstanceComplianceDocumentType' });


@ObjectType()
export class SubstanceComplianceClearinghouseResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => SubstanceComplianceDocumentType, )  documentType: SubstanceComplianceDocumentType;
  @Field(() => Date ,{nullable: true})  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean ,{nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
