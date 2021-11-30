import { Field, InputType } from '@nestjs/graphql';
import { FilesAnnualVehIspFilter,FilesAnnualVehIspFilterInput } from './files-annual-veh-isp-filter.input';
import { OrderByFilesAnnualVehIspInput } from './order-by-files-annual-veh-isp.input';
import { PaginatorParams } from 'src/shared/modules/graphql/dto/input/paginator.params.dto';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetPaginatedFilesAnnualVehIspInput {
  @Field(() => PaginatorParams)  paginator: PaginatorParams;
  @Field(() => FilesAnnualVehIspFilterInput, {nullable: true} )  where?: Filter<FilesAnnualVehIspFilter>;
  @Field(() => OrderByFilesAnnualVehIspInput, {nullable: true} )  orderBy?: OrderByFilesAnnualVehIspInput;
}
