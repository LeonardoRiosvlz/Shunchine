import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { IftaDocumentType } from 'src/modules/ifta-fuel-taxes/entities/ifta-fuel-taxes.entity';

registerEnumType(IftaDocumentType, { name: 'IftaDocumentType' });

@ObjectType()
export class IftaFuelTaxesResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => IftaDocumentType, )  documentType: IftaDocumentType;
  @Field(() => Date ,{nullable: true})  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean ,{nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
