import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyAccountingCommand } from '../impl/delete-many-accounting.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { AccountingEntity } from '../../../entities/accounting.entity';
import { AccountingEntityService } from '../../../services/accounting-entity.service';

@CommandHandler(DeleteManyAccountingCommand)
export class DeleteManyAccountingCommandHandler extends DeleteManyCommandHandler<AccountingEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AccountingEntityService.name)
  }

}
