import { CommandHandler } from '@nestjs/cqrs';
import { UpdateDriverFilesCommand } from '../impl/update-driver-files.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { DriverFilesEntityService } from '../../../services/driver-files-entity.service';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';

@CommandHandler(UpdateDriverFilesCommand)
export class UpdateDriverFilesCommandHandler extends UpdateCommandHandler<DriverFilesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DriverFilesEntityService.name)
  }

}
