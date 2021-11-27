import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { DotInfoDocumentType } from 'src/modules/dot-info/entities/dot-info.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(DotInfoDocumentType, { name: 'DotInfoDocumentType' });


@ObjectType()
export class DotInfoResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => DotInfoDocumentType, )  documentType: DotInfoDocumentType;
  @Field(() => Date )  expiration: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean ,{nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
