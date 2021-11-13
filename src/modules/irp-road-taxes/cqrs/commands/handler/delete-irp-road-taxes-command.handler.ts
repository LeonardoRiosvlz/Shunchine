import { CommandHandler } from '@nestjs/cqrs';
import { DeleteIrpRoadTaxesCommand } from '../impl/delete-irp-road-taxes.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { IrpRoadTaxesEntityService } from '../../../services/irp-road-taxes-entity.service';

@CommandHandler(DeleteIrpRoadTaxesCommand)
export class DeleteIrpRoadTaxesCommandHandler extends DeleteCommandHandler<IrpRoadTaxesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, IrpRoadTaxesEntityService.name)
  }
}
