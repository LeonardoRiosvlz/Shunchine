import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesAnnualVehIspInput } from './order-by-files-annual-veh-isp.input';
import { FilesAnnualVehIspFilter, FilesAnnualVehIspFilterInput } from './files-annual-veh-isp-filter.input';

@InputType()
export class GetAllFilesAnnualVehIspInput {
  @Field(() => FilesAnnualVehIspFilterInput, {nullable: true} )  where?: Filter<FilesAnnualVehIspFilter>;
  @Field(() => OrderByFilesAnnualVehIspInput, {nullable: true} )  orderBy?: OrderByFilesAnnualVehIspInput;
}
