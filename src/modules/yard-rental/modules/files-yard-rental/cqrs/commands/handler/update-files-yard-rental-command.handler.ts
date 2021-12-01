import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesYardRentalCommand } from '../impl/update-files-yard-rental.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesYardRentalEntityService } from '../../../services/files-yard-rental-entity.service';
import { FilesYardRentalEntity } from '../../../entities/files-yard-rental.entity';

@CommandHandler(UpdateFilesYardRentalCommand)
export class UpdateFilesYardRentalCommandHandler extends UpdateCommandHandler<FilesYardRentalEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesYardRentalEntityService.name)
  }

}
