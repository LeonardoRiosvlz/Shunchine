import { CommandHandler } from '@nestjs/cqrs';
import { DeleteAnnualVehInspStateRermitsCommand } from '../impl/delete-annual-veh-insp-state-rermits.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { AnnualVehInspStateRermitsEntity } from '../../../entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsEntityService } from '../../../services/annual-veh-insp-state-rermits-entity.service';

@CommandHandler(DeleteAnnualVehInspStateRermitsCommand)
export class DeleteAnnualVehInspStateRermitsCommandHandler extends DeleteCommandHandler<AnnualVehInspStateRermitsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, AnnualVehInspStateRermitsEntityService.name)
  }
}
