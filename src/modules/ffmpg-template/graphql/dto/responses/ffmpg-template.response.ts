import { Field, ID, ObjectType } from '@nestjs/graphql';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

@ObjectType()
export class FfmpgTemplateResponse {
  @Field(() => ID) id: string;
  @Field() name: string;
  @Field(() => [SolvedEntityResponse]) ffmpgOpts: Array<SolvedEntityResponse>;
  @Field({ nullable: true }) description?: string;
  @Field({ nullable: true }) createdAt?: Date;
  @Field({ nullable: true }) updatedAt?: Date;
}
