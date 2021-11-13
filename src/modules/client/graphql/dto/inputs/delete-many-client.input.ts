import { Field, InputType, ID } from '@nestjs/graphql';
import { ClientFilter, ClientFilterInput } from './client-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyClientInput {
  @Field(() => ClientFilterInput, {nullable: true} )  where?: Filter<ClientFilter>;
}
