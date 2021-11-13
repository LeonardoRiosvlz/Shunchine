import { Field, InputType } from '@nestjs/graphql';
import { ClientFilter, ClientFilterInput } from './client-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneClientInput {
  @Field(() => ClientFilterInput, {nullable: true} )  where?: Filter<ClientFilter>;
}
