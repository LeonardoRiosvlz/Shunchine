import { CommandHandler } from '@nestjs/cqrs';
import { UpdateClearinghouseFormCommand } from '../impl/update-clearinghouse-form.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { ClearinghouseFormEntityService } from '../../../services/clearinghouse-form-entity.service';
import { ClearinghouseFormEntity } from '../../../entities/clearinghouse-form.entity';

@CommandHandler(UpdateClearinghouseFormCommand)
export class UpdateClearinghouseFormCommandHandler extends UpdateCommandHandler<ClearinghouseFormEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, ClearinghouseFormEntityService.name)
  }

}
