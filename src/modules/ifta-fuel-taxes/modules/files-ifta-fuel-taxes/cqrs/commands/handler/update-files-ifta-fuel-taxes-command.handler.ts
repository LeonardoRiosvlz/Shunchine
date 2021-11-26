import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesIftaFuelTaxesCommand } from '../impl/update-files-ifta-fuel-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesIftaFuelTaxesEntityService } from '../../../services/files-ifta-fuel-taxes-entity.service';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';

@CommandHandler(UpdateFilesIftaFuelTaxesCommand)
export class UpdateFilesIftaFuelTaxesCommandHandler extends UpdateCommandHandler<FilesIftaFuelTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesIftaFuelTaxesEntityService.name)
  }

}
