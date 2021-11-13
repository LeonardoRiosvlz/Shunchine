import { Field, InputType } from '@nestjs/graphql';
import { IftaFuelTaxesFilter,IftaFuelTaxesFilterInput } from './ifta-fuel-taxes-filter.input';
import { OrderByIftaFuelTaxesInput } from './order-by-ifta-fuel-taxes.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedIftaFuelTaxesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => IftaFuelTaxesFilterInput, {nullable: true} )  where?: Filter<IftaFuelTaxesFilter>;
  @Field(() => OrderByIftaFuelTaxesInput, {nullable: true} )  orderBy?: OrderByIftaFuelTaxesInput;
}
