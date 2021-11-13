import { CommandHandler } from '@nestjs/cqrs';
import { UpdateIrpRoadTaxesCommand } from '../impl/update-irp-road-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { IrpRoadTaxesEntityService } from '../../../services/irp-road-taxes-entity.service';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';

@CommandHandler(UpdateIrpRoadTaxesCommand)
export class UpdateIrpRoadTaxesCommandHandler extends UpdateCommandHandler<IrpRoadTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, IrpRoadTaxesEntityService.name)
  }

}
