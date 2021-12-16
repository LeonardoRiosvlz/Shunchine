import { CommandHandler } from '@nestjs/cqrs';

import { CreateClearinghouseFormCommand } from '../impl/create-clearinghouse-form.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { ClearinghouseFormEntityService } from '../../../services/clearinghouse-form-entity.service';

@CommandHandler(CreateClearinghouseFormCommand)
export class CreateClearinghouseFormCommandHandler extends CreateCommandHandler<ClearinghouseFormEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClearinghouseFormEntityService.name);
  }

}
