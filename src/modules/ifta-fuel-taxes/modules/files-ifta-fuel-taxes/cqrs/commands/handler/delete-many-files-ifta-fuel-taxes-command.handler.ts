import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesIftaFuelTaxesCommand } from '../impl/delete-many-files-ifta-fuel-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesEntityService } from '../../../services/files-ifta-fuel-taxes-entity.service';

@CommandHandler(DeleteManyFilesIftaFuelTaxesCommand)
export class DeleteManyFilesIftaFuelTaxesCommandHandler extends DeleteManyCommandHandler<FilesIftaFuelTaxesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesIftaFuelTaxesEntityService.name)
  }

}
