import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesSubstanceComplianceClearinghouseCommand } from '../impl/delete-many-files-substance-compliance-clearinghouse.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseEntityService } from '../../../services/files-substance-compliance-clearinghouse-entity.service';

@CommandHandler(DeleteManyFilesSubstanceComplianceClearinghouseCommand)
export class DeleteManyFilesSubstanceComplianceClearinghouseCommandHandler extends DeleteManyCommandHandler<FilesSubstanceComplianceClearinghouseEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesSubstanceComplianceClearinghouseEntityService.name)
  }

}
