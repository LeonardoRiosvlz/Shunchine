import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesIftaFuelTaxesCommand } from '../impl/create-files-ifta-fuel-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesEntityService } from '../../../services/files-ifta-fuel-taxes-entity.service';

@CommandHandler(CreateFilesIftaFuelTaxesCommand)
export class CreateFilesIftaFuelTaxesCommandHandler extends CreateCommandHandler<FilesIftaFuelTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesIftaFuelTaxesEntityService.name);
  }

}
