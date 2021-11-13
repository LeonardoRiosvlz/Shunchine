import { Field, InputType, ID } from '@nestjs/graphql';
import { DotInfoFilter, DotInfoFilterInput } from './dot-info-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyDotInfoInput {
  @Field(() => DotInfoFilterInput, {nullable: true} )  where?: Filter<DotInfoFilter>;
}
