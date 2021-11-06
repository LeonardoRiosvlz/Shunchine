import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFfmpgOptionCommand } from '../impl/delete-ffmpg-option.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { FfmpgOptionEntityService } from '../../../services/ffmpg-option-entity.service';

@CommandHandler(DeleteFfmpgOptionCommand)
export class DeleteFfmpgOptionCommandHandler extends DeleteCommandHandler<FfmpgOptionEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FfmpgOptionEntityService.name)
  }
}
