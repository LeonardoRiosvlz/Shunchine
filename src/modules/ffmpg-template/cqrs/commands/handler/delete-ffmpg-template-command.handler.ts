import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFfmpgTemplateCommand } from '../impl/delete-ffmpg-template.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FfmpgTemplateEntity } from '../../../entities/ffmpg-template.entity';
import { FfmpgTemplateEntityService } from '../../../services/ffmpg-template-entity.service';

@CommandHandler(DeleteFfmpgTemplateCommand)
export class DeleteFfmpgTemplateCommandHandler extends DeleteCommandHandler<FfmpgTemplateEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FfmpgTemplateEntityService.name)
  }
}
