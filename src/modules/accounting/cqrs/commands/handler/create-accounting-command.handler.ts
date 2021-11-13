import { CommandHandler } from '@nestjs/cqrs';

import { CreateAccountingCommand } from '../impl/create-accounting.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { AccountingEntityService } from '../../../services/accounting-entity.service';

@CommandHandler(CreateAccountingCommand)
export class CreateAccountingCommandHandler extends CreateCommandHandler<AccountingEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AccountingEntityService.name);
  }

}
