import { Field, ID,  ObjectType } from '@nestjs/graphql';
import { CloudFileResponse } from 'src/shared/modules/graphql/dto/responses/cloud-file.response';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class FilesDotInfoResponse{
  @Field(() => ID) id: string;
  @Field(() => SolvedEntityResponse,{nullable: true}) dotInfo?: SolvedEntityResponse;
  @Field() name?: string;
  @Field(() => CloudFileResponse, { nullable: true }) file?: CloudFileResponse;
  @Field({nullable: true}) createdAt?: Date;
  @Field({nullable: true}) updatedAt?: Date;
}
