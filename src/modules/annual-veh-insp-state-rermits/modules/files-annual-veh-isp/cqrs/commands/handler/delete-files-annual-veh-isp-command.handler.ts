import { CommandHandler } from '@nestjs/cqrs';
import { DeleteFilesAnnualVehIspCommand } from '../impl/delete-files-annual-veh-isp.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspEntityService } from '../../../services/files-annual-veh-isp-entity.service';

@CommandHandler(DeleteFilesAnnualVehIspCommand)
export class DeleteFilesAnnualVehIspCommandHandler extends DeleteCommandHandler<FilesAnnualVehIspEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesAnnualVehIspEntityService.name)
  }
}
