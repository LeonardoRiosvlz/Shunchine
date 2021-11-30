import { Field, InputType } from '@nestjs/graphql';
import { FilesAnnualVehIspFilter, FilesAnnualVehIspFilterInput } from './files-annual-veh-isp-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class GetOneFilesAnnualVehIspInput {
  @Field(() => FilesAnnualVehIspFilterInput, {nullable: true} )  where?: Filter<FilesAnnualVehIspFilter>;
}
