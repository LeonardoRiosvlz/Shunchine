import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFfmpgOptionCommand } from '../impl/delete-many-ffmpg-option.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FfmpgOptionEntity } from '../../../entities/ffmpg-option.entity';
import { FfmpgOptionEntityService } from '../../../services/ffmpg-option-entity.service';

@CommandHandler(DeleteManyFfmpgOptionCommand)
export class DeleteManyFfmpgOptionCommandHandler extends DeleteManyCommandHandler<FfmpgOptionEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FfmpgOptionEntityService.name)
  }

}
