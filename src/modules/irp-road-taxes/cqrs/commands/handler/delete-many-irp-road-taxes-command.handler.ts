import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyIrpRoadTaxesCommand } from '../impl/delete-many-irp-road-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { IrpRoadTaxesEntityService } from '../../../services/irp-road-taxes-entity.service';

@CommandHandler(DeleteManyIrpRoadTaxesCommand)
export class DeleteManyIrpRoadTaxesCommandHandler extends DeleteManyCommandHandler<IrpRoadTaxesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, IrpRoadTaxesEntityService.name)
  }

}
