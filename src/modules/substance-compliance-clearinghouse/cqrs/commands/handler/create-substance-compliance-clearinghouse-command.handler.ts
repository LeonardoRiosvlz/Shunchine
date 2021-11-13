import { CommandHandler } from '@nestjs/cqrs';

import { CreateSubstanceComplianceClearinghouseCommand } from '../impl/create-substance-compliance-clearinghouse.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseEntityService } from '../../../services/substance-compliance-clearinghouse-entity.service';

@CommandHandler(CreateSubstanceComplianceClearinghouseCommand)
export class CreateSubstanceComplianceClearinghouseCommandHandler extends CreateCommandHandler<SubstanceComplianceClearinghouseEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SubstanceComplianceClearinghouseEntityService.name);
  }

}
