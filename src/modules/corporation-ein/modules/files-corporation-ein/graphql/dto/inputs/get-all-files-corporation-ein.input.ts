import { Field, InputType } from '@nestjs/graphql';
import { Filter } from '@nestjs-query/core';
import { OrderByFilesCorporationEinInput } from './order-by-files-corporation-ein.input';
import { FilesCorporationEinFilter, FilesCorporationEinFilterInput } from './files-corporation-ein-filter.input';

@InputType()
export class GetAllFilesCorporationEinInput {
  @Field(() => FilesCorporationEinFilterInput, {nullable: true} )  where?: Filter<FilesCorporationEinFilter>;
  @Field(() => OrderByFilesCorporationEinInput, {nullable: true} )  orderBy?: OrderByFilesCorporationEinInput;
}
