import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesSubstanceComplianceClearinghouseCommand } from '../impl/update-files-substance-compliance-clearinghouse.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesSubstanceComplianceClearinghouseEntityService } from '../../../services/files-substance-compliance-clearinghouse-entity.service';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';

@CommandHandler(UpdateFilesSubstanceComplianceClearinghouseCommand)
export class UpdateFilesSubstanceComplianceClearinghouseCommandHandler extends UpdateCommandHandler<FilesSubstanceComplianceClearinghouseEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesSubstanceComplianceClearinghouseEntityService.name)
  }

}
