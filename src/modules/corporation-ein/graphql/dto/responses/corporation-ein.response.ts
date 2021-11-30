import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { DocumentType } from 'src/modules/corporation-ein/entities/corporation-ein.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(DocumentType, { name: 'DocumentType' });

@ObjectType()
export class CorporationEinResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => DocumentType, )  documentType: DocumentType;
  @Field(() => Date ,{nullable: true})  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean ,{nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
