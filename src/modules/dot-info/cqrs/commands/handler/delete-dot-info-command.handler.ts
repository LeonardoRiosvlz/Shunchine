import { CommandHandler } from '@nestjs/cqrs';
import { DeleteDotInfoCommand } from '../impl/delete-dot-info.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { DotInfoEntityService } from '../../../services/dot-info-entity.service';

@CommandHandler(DeleteDotInfoCommand)
export class DeleteDotInfoCommandHandler extends DeleteCommandHandler<DotInfoEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DotInfoEntityService.name)
  }
}
