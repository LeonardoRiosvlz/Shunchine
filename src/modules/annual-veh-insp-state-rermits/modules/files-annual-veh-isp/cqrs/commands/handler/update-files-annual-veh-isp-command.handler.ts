import { CommandHandler } from '@nestjs/cqrs';
import { UpdateFilesAnnualVehIspCommand } from '../impl/update-files-annual-veh-isp.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { FilesAnnualVehIspEntityService } from '../../../services/files-annual-veh-isp-entity.service';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';

@CommandHandler(UpdateFilesAnnualVehIspCommand)
export class UpdateFilesAnnualVehIspCommandHandler extends UpdateCommandHandler<FilesAnnualVehIspEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesAnnualVehIspEntityService.name)
  }

}
