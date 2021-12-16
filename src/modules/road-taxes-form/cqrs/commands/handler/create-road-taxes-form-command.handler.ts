import { CommandHandler } from '@nestjs/cqrs';

import { CreateRoadTaxesFormCommand } from '../impl/create-road-taxes-form.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { RoadTaxesFormEntityService } from '../../../services/road-taxes-form-entity.service';

@CommandHandler(CreateRoadTaxesFormCommand)
export class CreateRoadTaxesFormCommandHandler extends CreateCommandHandler<RoadTaxesFormEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, RoadTaxesFormEntityService.name);
  }

}
