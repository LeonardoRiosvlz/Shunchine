import { CreateAnnualVehInspStateRermitsCommandHandler } from './handler/create-annual-veh-insp-state-rermits-command.handler';
import { DeleteAnnualVehInspStateRermitsCommandHandler } from './handler/delete-annual-veh-insp-state-rermits-command.handler';
import { UpdateAnnualVehInspStateRermitsCommandHandler } from './handler/update-annual-veh-insp-state-rermits-command.handler';
import { Provider } from '@nestjs/common';
import { DeleteManyAnnualVehInspStateRermitsCommandHandler } from './handler/delete-many-annual-veh-insp-state-rermits-command.handler';

export const AnnualVehInspStateRermitsCommandHandlers: Array<Provider> = [
  CreateAnnualVehInspStateRermitsCommandHandler,
  DeleteAnnualVehInspStateRermitsCommandHandler,
  UpdateAnnualVehInspStateRermitsCommandHandler,
  DeleteManyAnnualVehInspStateRermitsCommandHandler
];
