import { CommandHandler } from '@nestjs/cqrs';
import { UpdateRoadTaxesFormCommand } from '../impl/update-road-taxes-form.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { RoadTaxesFormEntityService } from '../../../services/road-taxes-form-entity.service';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';

@CommandHandler(UpdateRoadTaxesFormCommand)
export class UpdateRoadTaxesFormCommandHandler extends UpdateCommandHandler<RoadTaxesFormEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, RoadTaxesFormEntityService.name)
  }

}
