import { CommandHandler } from '@nestjs/cqrs';
import { DeleteRoadTaxesFormCommand } from '../impl/delete-road-taxes-form.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { RoadTaxesFormEntityService } from '../../../services/road-taxes-form-entity.service';

@CommandHandler(DeleteRoadTaxesFormCommand)
export class DeleteRoadTaxesFormCommandHandler extends DeleteCommandHandler<RoadTaxesFormEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, RoadTaxesFormEntityService.name)
  }
}
