import { Field, InputType } from '@nestjs/graphql';
import { IrpRoadTaxesFilter,IrpRoadTaxesFilterInput } from './irp-road-taxes-filter.input';
import { OrderByIrpRoadTaxesInput } from './order-by-irp-road-taxes.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedIrpRoadTaxesInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => IrpRoadTaxesFilterInput, {nullable: true} )  where?: Filter<IrpRoadTaxesFilter>;
  @Field(() => OrderByIrpRoadTaxesInput, {nullable: true} )  orderBy?: OrderByIrpRoadTaxesInput;
}
