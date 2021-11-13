import { CommandHandler } from '@nestjs/cqrs';
import { DeleteAccountingCommand } from '../impl/delete-accounting.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { AccountingEntityService } from '../../../services/accounting-entity.service';

@CommandHandler(DeleteAccountingCommand)
export class DeleteAccountingCommandHandler extends DeleteCommandHandler<AccountingEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AccountingEntityService.name)
  }
}
