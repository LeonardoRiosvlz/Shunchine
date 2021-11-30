import { CommandHandler } from '@nestjs/cqrs';

import { CreateFilesAnnualVehIspCommand } from '../impl/create-files-annual-veh-isp.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspEntityService } from '../../../services/files-annual-veh-isp-entity.service';

@CommandHandler(CreateFilesAnnualVehIspCommand)
export class CreateFilesAnnualVehIspCommandHandler extends CreateCommandHandler<FilesAnnualVehIspEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, FilesAnnualVehIspEntityService.name);
  }

}
