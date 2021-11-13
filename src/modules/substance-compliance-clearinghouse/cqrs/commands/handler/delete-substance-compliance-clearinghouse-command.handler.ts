import { CommandHandler } from '@nestjs/cqrs';
import { DeleteSubstanceComplianceClearinghouseCommand } from '../impl/delete-substance-compliance-clearinghouse.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseEntityService } from '../../../services/substance-compliance-clearinghouse-entity.service';

@CommandHandler(DeleteSubstanceComplianceClearinghouseCommand)
export class DeleteSubstanceComplianceClearinghouseCommandHandler extends DeleteCommandHandler<SubstanceComplianceClearinghouseEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, SubstanceComplianceClearinghouseEntityService.name)
  }
}
