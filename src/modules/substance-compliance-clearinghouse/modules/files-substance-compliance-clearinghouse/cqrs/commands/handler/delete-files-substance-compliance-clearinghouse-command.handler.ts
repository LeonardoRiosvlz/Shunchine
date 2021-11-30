import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesSubstanceComplianceClearinghouseCommand } from '../impl/delete-files-substance-compliance-clearinghouse.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesSubstanceComplianceClearinghouseEntity } from '../../../entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseEntityService } from '../../../services/files-substance-compliance-clearinghouse-entity.service';

@CommandHandler(DeleteFilesSubstanceComplianceClearinghouseCommand)
export class DeleteFilesSubstanceComplianceClearinghouseCommandHandler extends DeleteCommandHandler<FilesSubstanceComplianceClearinghouseEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesSubstanceComplianceClearinghouseEntityService.name)
  }
}
