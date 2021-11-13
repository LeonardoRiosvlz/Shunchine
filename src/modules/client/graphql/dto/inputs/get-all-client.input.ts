import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByClientInput } from './order-by-client.input';
import { ClientFilter, ClientFilterInput } from './client-filter.input';

@InputType()
export class GetAllClientInput {
  @Field(() => ClientFilterInput, {nullable: true} )  where?: Filter<ClientFilter>;
  @Field(() => OrderByClientInput, {nullable: true} )  orderBy?: OrderByClientInput;
}
