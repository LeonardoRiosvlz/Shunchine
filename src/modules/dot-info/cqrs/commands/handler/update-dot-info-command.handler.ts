import { CommandHandler } from '@nestjs/cqrs';
import { UpdateDotInfoCommand } from '../impl/update-dot-info.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { DotInfoEntityService } from '../../../services/dot-info-entity.service';
import { DotInfoEntity } from '../../../entities/dot-info.entity';

@CommandHandler(UpdateDotInfoCommand)
export class UpdateDotInfoCommandHandler extends UpdateCommandHandler<DotInfoEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DotInfoEntityService.name)
  }

}
