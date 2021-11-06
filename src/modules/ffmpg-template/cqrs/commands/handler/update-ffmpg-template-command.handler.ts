import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFfmpgTemplateCommand } from '../impl/update-ffmpg-template.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FfmpgTemplateEntityService } from '../../../services/ffmpg-template-entity.service';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';

@CommandHandler(UpdateFfmpgTemplateCommand)
export class UpdateFfmpgTemplateCommandHandler extends UpdateCommandHandler<FfmpgTemplateEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FfmpgTemplateEntityService.name)
  }

}
