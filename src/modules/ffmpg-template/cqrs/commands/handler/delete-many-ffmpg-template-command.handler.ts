import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFfmpgTemplateCommand } from '../impl/delete-many-ffmpg-template.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { FfmpgTemplateEntityService } from '../../../services/ffmpg-template-entity.service';

@CommandHandler(DeleteManyFfmpgTemplateCommand)
export class DeleteManyFfmpgTemplateCommandHandler extends DeleteManyCommandHandler<FfmpgTemplateEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FfmpgTemplateEntityService.name)
  }

}
