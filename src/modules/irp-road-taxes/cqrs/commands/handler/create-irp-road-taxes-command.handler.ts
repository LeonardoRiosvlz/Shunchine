import { CommandHandler } from '@nestjs/cqrs';

import { CreateIrpRoadTaxesCommand } from '../impl/create-irp-road-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { IrpRoadTaxesEntityService } from '../../../services/irp-road-taxes-entity.service';

@CommandHandler(CreateIrpRoadTaxesCommand)
export class CreateIrpRoadTaxesCommandHandler extends CreateCommandHandler<IrpRoadTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, IrpRoadTaxesEntityService.name);
  }

}
