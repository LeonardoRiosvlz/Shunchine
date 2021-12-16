import { CommandHandler } from '@nestjs/cqrs';
import { DeleteClearinghouseFormCommand } from '../impl/delete-clearinghouse-form.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';
import { ClearinghouseFormEntityService } from '../../../services/clearinghouse-form-entity.service';

@CommandHandler(DeleteClearinghouseFormCommand)
export class DeleteClearinghouseFormCommandHandler extends DeleteCommandHandler<ClearinghouseFormEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, ClearinghouseFormEntityService.name)
  }
}
