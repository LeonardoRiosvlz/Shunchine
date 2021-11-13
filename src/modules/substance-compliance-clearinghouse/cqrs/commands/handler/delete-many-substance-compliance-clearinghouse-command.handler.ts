import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManySubstanceComplianceClearinghouseCommand } from '../impl/delete-many-substance-compliance-clearinghouse.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseEntityService } from '../../../services/substance-compliance-clearinghouse-entity.service';

@CommandHandler(DeleteManySubstanceComplianceClearinghouseCommand)
export class DeleteManySubstanceComplianceClearinghouseCommandHandler extends DeleteManyCommandHandler<SubstanceComplianceClearinghouseEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SubstanceComplianceClearinghouseEntityService.name)
  }

}
