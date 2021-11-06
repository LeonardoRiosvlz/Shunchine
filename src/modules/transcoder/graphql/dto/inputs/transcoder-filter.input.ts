import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import { ObjectType, ID } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { TranscoderEntity, TranscodeStatus } from '../../../entities/transcoder.entity';

@ObjectType()
export class TranscoderFilter implements IEntityFilter<TranscoderEntity>{
  @FilterableField(() => String, { nullable: true }) id?: string;
  @FilterableField(() => String, { nullable: true }) description?: string;
  @FilterableField(() => TranscodeStatus, { nullable: true }) status?: TranscodeStatus;
  @FilterableField(() => ID, { nullable: true }) user?: string;
  @FilterableField(() => Date, { nullable: true }) createdAt?: Date;
  @FilterableField(() => Date, { nullable: true }) updatedAt?: Date;

}

export const TranscoderFilterInput = FilterType(TranscoderFilter);