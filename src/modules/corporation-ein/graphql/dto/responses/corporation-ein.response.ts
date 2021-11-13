import { Field, ID,  ObjectType , registerEnumType} from '@nestjs/graphql';
import { DocumentType } from 'src/modules/corporation-ein/entities/corporation-ein.entity';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(DocumentType, { name: 'DocumentType' });

@ObjectType()
export class CorporationEinResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => DocumentType, )  documentType: DocumentType;
  @Field(() => Date )  expiration: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
