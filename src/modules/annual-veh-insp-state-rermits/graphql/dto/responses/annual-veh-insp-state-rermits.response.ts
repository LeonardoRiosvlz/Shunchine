import { Field, ID,  ObjectType, registerEnumType } from '@nestjs/graphql';
import { AnnualVehInspDocumentType } from 'src/modules/annual-veh-insp-state-rermits/entities/annual-veh-insp-state-rermits.entity';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(AnnualVehInspDocumentType, { name: 'AnnualVehInspDocumentType' });


@ObjectType()
export class AnnualVehInspStateRermitsResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse, { nullable: true }) client: SolvedEntityResponse;
  @Field(() => AnnualVehInspDocumentType, )  documentType: AnnualVehInspDocumentType;
  @Field(() => Date,{nullable: true} )  expiration?: Date;
  @Field(() => Boolean )  expires: boolean;
  @Field(() => Boolean ,{nullable: true})  archived?: boolean;
  @Field(() => String, {nullable: true} )  description?: string;
  @Field(() => String, {nullable: true} )  number?: string;
  @Field(() => String, {nullable: true} )  notes?: string;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
