import { CommandHandler } from '@nestjs/cqrs';

import { CreateDriverFilesCommand } from '../impl/create-driver-files.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { DriverFilesEntityService } from '../../../services/driver-files-entity.service';

@CommandHandler(CreateDriverFilesCommand)
export class CreateDriverFilesCommandHandler extends CreateCommandHandler<DriverFilesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DriverFilesEntityService.name);
  }

}
