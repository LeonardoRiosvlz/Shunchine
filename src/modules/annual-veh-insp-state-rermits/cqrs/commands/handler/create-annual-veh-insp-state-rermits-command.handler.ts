import { CommandHandler } from '@nestjs/cqrs';

import { CreateAnnualVehInspStateRermitsCommand } from '../impl/create-annual-veh-insp-state-rermits.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsEntityService } from '../../../services/annual-veh-insp-state-rermits-entity.service';

@CommandHandler(CreateAnnualVehInspStateRermitsCommand)
export class CreateAnnualVehInspStateRermitsCommandHandler extends CreateCommandHandler<AnnualVehInspStateRermitsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AnnualVehInspStateRermitsEntityService.name);
  }

}
