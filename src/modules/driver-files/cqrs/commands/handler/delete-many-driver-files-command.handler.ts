import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyDriverFilesCommand } from '../impl/delete-many-driver-files.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { DriverFilesEntity } from '../../../entities/driver-files.entity';
import { DriverFilesEntityService } from '../../../services/driver-files-entity.service';

@CommandHandler(DeleteManyDriverFilesCommand)
export class DeleteManyDriverFilesCommandHandler extends DeleteManyCommandHandler<DriverFilesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DriverFilesEntityService.name)
  }

}
