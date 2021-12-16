import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyClearinghouseFormCommand } from '../impl/delete-many-clearinghouse-form.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { ClearinghouseFormEntityService } from '../../../services/clearinghouse-form-entity.service';

@CommandHandler(DeleteManyClearinghouseFormCommand)
export class DeleteManyClearinghouseFormCommandHandler extends DeleteManyCommandHandler<ClearinghouseFormEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClearinghouseFormEntityService.name)
  }

}
