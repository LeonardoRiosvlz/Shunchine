import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesIftaFuelTaxesCommand } from '../impl/delete-files-ifta-fuel-taxes.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesEntityService } from '../../../services/files-ifta-fuel-taxes-entity.service';

@CommandHandler(DeleteFilesIftaFuelTaxesCommand)
export class DeleteFilesIftaFuelTaxesCommandHandler extends DeleteCommandHandler<FilesIftaFuelTaxesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesIftaFuelTaxesEntityService.name)
  }
}
