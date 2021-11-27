import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesDotInfoCommand } from '../impl/create-files-dot-info.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';
import { FilesDotInfoEntityService } from '../../../services/files-dot-info-entity.service';

@CommandHandler(CreateFilesDotInfoCommand)
export class CreateFilesDotInfoCommandHandler extends CreateCommandHandler<FilesDotInfoEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesDotInfoEntityService.name);
  }

}
