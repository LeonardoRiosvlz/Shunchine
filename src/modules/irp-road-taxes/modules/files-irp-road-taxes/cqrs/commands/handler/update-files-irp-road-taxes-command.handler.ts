import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesIrpRoadTaxesCommand } from '../impl/update-files-irp-road-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesIrpRoadTaxesEntityService } from '../../../services/files-irp-road-taxes-entity.service';
import { FilesIrpRoadTaxesEntity } from '../../../entities/files-irp-road-taxes.entity';

@CommandHandler(UpdateFilesIrpRoadTaxesCommand)
export class UpdateFilesIrpRoadTaxesCommandHandler extends UpdateCommandHandler<FilesIrpRoadTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesIrpRoadTaxesEntityService.name)
  }

}
