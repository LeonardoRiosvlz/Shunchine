import { CommandHandler } from '@nestjs/cqrs';

import { CreateFfmpgOptionCommand } from '../impl/create-ffmpg-option.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { FfmpgOptionEntityService } from '../../../services/ffmpg-option-entity.service';

@CommandHandler(CreateFfmpgOptionCommand)
export class CreateFfmpgOptionCommandHandler extends CreateCommandHandler<FfmpgOptionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FfmpgOptionEntityService.name);
  }

}
