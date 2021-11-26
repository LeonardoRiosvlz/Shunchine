import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesIrpRoadTaxesCommand } from '../impl/create-files-irp-road-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesEntityService } from '../../../services/files-irp-road-taxes-entity.service';

@CommandHandler(CreateFilesIrpRoadTaxesCommand)
export class CreateFilesIrpRoadTaxesCommandHandler extends CreateCommandHandler<FilesIrpRoadTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesIrpRoadTaxesEntityService.name);
  }

}
