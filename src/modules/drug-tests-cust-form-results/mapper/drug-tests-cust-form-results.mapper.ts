import { DrugTestsCustFormResultsEntity } from '../entities/drug-tests-cust-form-results.entity';

import { Injectable } from '@nestjs/common';
import { DrugTestsCustFormResultsResponse } from '../graphql/dto/responses/drug-tests-cust-form-results.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDrugTestsCustFormResultsInput } from '../graphql/dto/inputs/create-drug-tests-cust-form-results.input';

@Injectable()
export class DrugTestsCustFormResultsMapper implements BaseMapper<DrugTestsCustFormResultsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDrugTestsCustFormResultsInput>(dto: CreateDrugTestsCustFormResultsInput): DrugTestsCustFormResultsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DrugTestsCustFormResultsResponse>(dto: DrugTestsCustFormResultsResponse): DrugTestsCustFormResultsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: DrugTestsCustFormResultsEntity): DrugTestsCustFormResultsResponse {
    return {
      ...persistentEntity,
    };
  }

}
