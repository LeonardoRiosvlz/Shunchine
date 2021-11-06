import { CommandHandler } from '@nestjs/cqrs';

import { CreateFfmpgTemplateCommand } from '../impl/create-ffmpg-template.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { FfmpgTemplateEntityService } from '../../../services/ffmpg-template-entity.service';

@CommandHandler(CreateFfmpgTemplateCommand)
export class CreateFfmpgTemplateCommandHandler extends CreateCommandHandler<FfmpgTemplateEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FfmpgTemplateEntityService.name);
  }

}
