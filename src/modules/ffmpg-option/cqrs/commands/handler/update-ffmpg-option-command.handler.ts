import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFfmpgOptionCommand } from '../impl/update-ffmpg-option.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FfmpgOptionEntityService } from '../../../services/ffmpg-option-entity.service';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';

@CommandHandler(UpdateFfmpgOptionCommand)
export class UpdateFfmpgOptionCommandHandler extends UpdateCommandHandler<FfmpgOptionEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FfmpgOptionEntityService.name)
  }

}
