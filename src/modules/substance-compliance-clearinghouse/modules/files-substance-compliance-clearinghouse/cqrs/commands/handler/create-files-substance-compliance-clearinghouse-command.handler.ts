import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesSubstanceComplianceClearinghouseCommand } from '../impl/create-files-substance-compliance-clearinghouse.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseEntityService } from '../../../services/files-substance-compliance-clearinghouse-entity.service';

@CommandHandler(CreateFilesSubstanceComplianceClearinghouseCommand)
export class CreateFilesSubstanceComplianceClearinghouseCommandHandler extends CreateCommandHandler<FilesSubstanceComplianceClearinghouseEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesSubstanceComplianceClearinghouseEntityService.name);
  }

}
