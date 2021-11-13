import { CommandHandler } from '@nestjs/cqrs';
import { UpdateSubstanceComplianceClearinghouseCommand } from '../impl/update-substance-compliance-clearinghouse.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { SubstanceComplianceClearinghouseEntityService } from '../../../services/substance-compliance-clearinghouse-entity.service';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';

@CommandHandler(UpdateSubstanceComplianceClearinghouseCommand)
export class UpdateSubstanceComplianceClearinghouseCommandHandler extends UpdateCommandHandler<SubstanceComplianceClearinghouseEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, SubstanceComplianceClearinghouseEntityService.name)
  }

}
