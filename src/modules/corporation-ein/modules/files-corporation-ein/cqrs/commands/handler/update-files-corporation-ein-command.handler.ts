import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesCorporationEinCommand } from '../impl/update-files-corporation-ein.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesCorporationEinEntityService } from '../../../services/files-corporation-ein-entity.service';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';

@CommandHandler(UpdateFilesCorporationEinCommand)
export class UpdateFilesCorporationEinCommandHandler extends UpdateCommandHandler<FilesCorporationEinEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesCorporationEinEntityService.name)
  }

}
