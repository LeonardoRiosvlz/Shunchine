import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesSubstanceComplianceClearinghouseEntity } from '../entities/files-substance-compliance-clearinghouse.entity';

@Injectable()
export class FilesSubstanceComplianceClearinghouseRepository extends BaseRepository<FilesSubstanceComplianceClearinghouseEntity, FilterableFieldsType<FilesSubstanceComplianceClearinghouseEntity>> {
  constructor(
    @Inject(FilesSubstanceComplianceClearinghouseEntity.name) private readonly _filesSubstanceComplianceClearinghouseModel: Model<FilesSubstanceComplianceClearinghouseEntity>,
  ) {
    super(_filesSubstanceComplianceClearinghouseModel, FilesSubstanceComplianceClearinghouseRepository.name);
  }
}
