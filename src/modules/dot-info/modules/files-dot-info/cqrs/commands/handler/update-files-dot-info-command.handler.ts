import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesDotInfoCommand } from '../impl/update-files-dot-info.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesDotInfoEntityService } from '../../../services/files-dot-info-entity.service';
import { FilesDotInfoEntity } from '../../../entities/files-dot-info.entity';

@CommandHandler(UpdateFilesDotInfoCommand)
export class UpdateFilesDotInfoCommandHandler extends UpdateCommandHandler<FilesDotInfoEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesDotInfoEntityService.name)
  }

}
