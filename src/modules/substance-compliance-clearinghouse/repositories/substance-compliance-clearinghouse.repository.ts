import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SubstanceComplianceClearinghouseEntity } from '../entities/substance-compliance-clearinghouse.entity';

@Injectable()
export class SubstanceComplianceClearinghouseRepository extends BaseRepository<SubstanceComplianceClearinghouseEntity, FilterableFieldsType<SubstanceComplianceClearinghouseEntity>> {
  constructor(
    @Inject(SubstanceComplianceClearinghouseEntity.name) private readonly _substanceComplianceClearinghouseModel: Model<SubstanceComplianceClearinghouseEntity>,
  ) {
    super(_substanceComplianceClearinghouseModel, SubstanceComplianceClearinghouseRepository.name);
  }
}
