import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesIrpRoadTaxesCommand } from '../impl/delete-many-files-irp-road-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesEntityService } from '../../../services/files-irp-road-taxes-entity.service';

@CommandHandler(DeleteManyFilesIrpRoadTaxesCommand)
export class DeleteManyFilesIrpRoadTaxesCommandHandler extends DeleteManyCommandHandler<FilesIrpRoadTaxesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesIrpRoadTaxesEntityService.name)
  }

}
