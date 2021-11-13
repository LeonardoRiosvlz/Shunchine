import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { SubstanceComplianceClearinghouseEntity } from '../entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseRepository } from '../repositories/substance-compliance-clearinghouse.repository';


@Injectable()
export class SubstanceComplianceClearinghouseEntityService extends BaseEntityService<SubstanceComplianceClearinghouseEntity> {
  constructor(private readonly _substanceComplianceClearinghouseRepo: SubstanceComplianceClearinghouseRepository) {
    super(_substanceComplianceClearinghouseRepo, SubstanceComplianceClearinghouseEntity.name);
  }




}
