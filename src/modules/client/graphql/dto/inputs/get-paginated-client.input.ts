import { Field, InputType } from '@nestjs/graphql';
import { ClientFilter,ClientFilterInput } from './client-filter.input';
import { OrderByClientInput } from './order-by-client.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedClientInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => ClientFilterInput, {nullable: true} )  where?: Filter<ClientFilter>;
  @Field(() => OrderByClientInput, {nullable: true} )  orderBy?: OrderByClientInput;
}
