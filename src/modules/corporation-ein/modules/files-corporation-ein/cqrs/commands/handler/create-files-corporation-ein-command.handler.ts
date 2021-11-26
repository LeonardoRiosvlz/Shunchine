import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesCorporationEinCommand } from '../impl/create-files-corporation-ein.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesCorporationEinEntity } from '../../../entities/files-corporation-ein.entity';
import { FilesCorporationEinEntityService } from '../../../services/files-corporation-ein-entity.service';

@CommandHandler(CreateFilesCorporationEinCommand)
export class CreateFilesCorporationEinCommandHandler extends CreateCommandHandler<FilesCorporationEinEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesCorporationEinEntityService.name);
  }

}
