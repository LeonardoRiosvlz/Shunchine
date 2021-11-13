import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { DrugTestsCustFormResultsEntity } from '../entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsRepository } from '../repositories/drug-tests-cust-form-results.repository';


@Injectable()
export class DrugTestsCustFormResultsEntityService extends BaseEntityService<DrugTestsCustFormResultsEntity> {
  constructor(private readonly _drugTestsCustFormResultsRepo: DrugTestsCustFormResultsRepository) {
    super(_drugTestsCustFormResultsRepo, DrugTestsCustFormResultsEntity.name);
  }




}
