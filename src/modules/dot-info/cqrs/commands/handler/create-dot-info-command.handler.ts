import { CommandHandler } from '@nestjs/cqrs';

import { CreateDotInfoCommand } from '../impl/create-dot-info.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { DotInfoEntity } from '../../../entities/dot-info.entity';
import { DotInfoEntityService } from '../../../services/dot-info-entity.service';

@CommandHandler(CreateDotInfoCommand)
export class CreateDotInfoCommandHandler extends CreateCommandHandler<DotInfoEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DotInfoEntityService.name);
  }

}
