import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyAnnualVehInspStateRermitsCommand } from '../impl/delete-many-annual-veh-insp-state-rermits.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsEntityService } from '../../../services/annual-veh-insp-state-rermits-entity.service';

@CommandHandler(DeleteManyAnnualVehInspStateRermitsCommand)
export class DeleteManyAnnualVehInspStateRermitsCommandHandler extends DeleteManyCommandHandler<AnnualVehInspStateRermitsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AnnualVehInspStateRermitsEntityService.name)
  }

}
