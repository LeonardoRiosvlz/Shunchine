import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesIrpRoadTaxesCommand } from '../impl/delete-files-irp-road-taxes.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesEntityService } from '../../../services/files-irp-road-taxes-entity.service';

@CommandHandler(DeleteFilesIrpRoadTaxesCommand)
export class DeleteFilesIrpRoadTaxesCommandHandler extends DeleteCommandHandler<FilesIrpRoadTaxesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesIrpRoadTaxesEntityService.name)
  }
}
