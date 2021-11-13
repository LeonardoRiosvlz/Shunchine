import { CommandHandler } from '@nestjs/cqrs';
import { UpdateAnnualVehInspStateRermitsCommand } from '../impl/update-annual-veh-insp-state-rermits.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { AnnualVehInspStateRermitsEntityService } from '../../../services/annual-veh-insp-state-rermits-entity.service';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';

@CommandHandler(UpdateAnnualVehInspStateRermitsCommand)
export class UpdateAnnualVehInspStateRermitsCommandHandler extends UpdateCommandHandler<AnnualVehInspStateRermitsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, AnnualVehInspStateRermitsEntityService.name)
  }

}
