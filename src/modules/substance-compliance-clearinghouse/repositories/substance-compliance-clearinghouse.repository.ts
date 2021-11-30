import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { SubstanceComplianceClearinghouseEntity } from '../entities/substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseRepository } from '../modules/files-substance-compliance-clearinghouse/repositories/files-substance-compliance-clearinghouse.repository';

@Injectable()
export class SubstanceComplianceClearinghouseRepository extends BaseRepository<SubstanceComplianceClearinghouseEntity, FilterableFieldsType<SubstanceComplianceClearinghouseEntity>>implements Partial<IEntityHooks<SubstanceComplianceClearinghouseEntity>> {
  constructor(
    private _filesSubstanceComplianceClearinghouseRepository:FilesSubstanceComplianceClearinghouseRepository,
    @Inject(SubstanceComplianceClearinghouseEntity.name) private readonly _substanceComplianceClearinghouseModel: Model<SubstanceComplianceClearinghouseEntity>,
  ) {
    super(_substanceComplianceClearinghouseModel, SubstanceComplianceClearinghouseRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(substanceComplianceClearinghouse: SubstanceComplianceClearinghouseEntity): Promise<void> {
    await this._filesSubstanceComplianceClearinghouseRepository.deleteMany({ substanceComplianceClearinghouse: { eq: substanceComplianceClearinghouse.id } });
  }
}
