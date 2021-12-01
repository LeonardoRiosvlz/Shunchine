import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesYardRentalCommand } from '../impl/create-files-yard-rental.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';
import { FilesYardRentalEntityService } from '../../../services/files-yard-rental-entity.service';

@CommandHandler(CreateFilesYardRentalCommand)
export class CreateFilesYardRentalCommandHandler extends CreateCommandHandler<FilesYardRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesYardRentalEntityService.name);
  }

}
