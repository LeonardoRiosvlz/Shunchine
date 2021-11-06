import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Resolution } from 'src/modules/transcoder/entities/schemas/transcode-options.schema';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

registerEnumType(Resolution, { name: 'Resolution' })
@ObjectType()
export class TranscodeOptionResponse {
  @Field(() => Resolution, { nullable: true }) resolution: Resolution;
  @Field(() => SolvedEntityResponse, { nullable: true }) template?: SolvedEntityResponse;
}
