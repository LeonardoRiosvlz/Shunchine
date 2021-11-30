import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyFilesAnnualVehIspCommand } from '../impl/delete-many-files-annual-veh-isp.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { FilesAnnualVehIspEntity } from '../../../entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspEntityService } from '../../../services/files-annual-veh-isp-entity.service';

@CommandHandler(DeleteManyFilesAnnualVehIspCommand)
export class DeleteManyFilesAnnualVehIspCommandHandler extends DeleteManyCommandHandler<FilesAnnualVehIspEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, FilesAnnualVehIspEntityService.name)
  }

}
