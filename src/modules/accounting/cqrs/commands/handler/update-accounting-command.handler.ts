import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAccountingCommand } from '../impl/update-accounting.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { AccountingEntityService } from '../../../services/accounting-entity.service';
import { AccountingEntity } from '../../../entities/accounting.entity';

@CommandHandler(UpdateAccountingCommand)
export class UpdateAccountingCommandHandler extends UpdateCommandHandler<AccountingEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AccountingEntityService.name)
  }

}
