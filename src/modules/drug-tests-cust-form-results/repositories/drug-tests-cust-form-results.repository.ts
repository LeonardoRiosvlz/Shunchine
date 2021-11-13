import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DrugTestsCustFormResultsEntity } from '../entities/drug-tests-cust-form-results.entity';

@Injectable()
export class DrugTestsCustFormResultsRepository extends BaseRepository<DrugTestsCustFormResultsEntity, FilterableFieldsType<DrugTestsCustFormResultsEntity>> {
  constructor(
    @Inject(DrugTestsCustFormResultsEntity.name) private readonly _drugTestsCustFormResultsModel: Model<DrugTestsCustFormResultsEntity>,
  ) {
    super(_drugTestsCustFormResultsModel, DrugTestsCustFormResultsRepository.name);
  }
}
