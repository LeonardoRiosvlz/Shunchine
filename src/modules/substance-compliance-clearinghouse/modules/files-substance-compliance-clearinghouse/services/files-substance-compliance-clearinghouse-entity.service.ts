import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesSubstanceComplianceClearinghouseEntity } from '../entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseRepository } from '../repositories/files-substance-compliance-clearinghouse.repository';


@Injectable()
export class FilesSubstanceComplianceClearinghouseEntityService extends BaseEntityService<FilesSubstanceComplianceClearinghouseEntity> {
  constructor(private readonly _filesSubstanceComplianceClearinghouseRepo: FilesSubstanceComplianceClearinghouseRepository) {
    super(_filesSubstanceComplianceClearinghouseRepo, FilesSubstanceComplianceClearinghouseEntity.name);
  }




}
