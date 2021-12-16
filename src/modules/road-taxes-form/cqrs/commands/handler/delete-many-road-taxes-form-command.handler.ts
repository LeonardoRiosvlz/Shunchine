import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyRoadTaxesFormCommand } from '../impl/delete-many-road-taxes-form.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { RoadTaxesFormEntityService } from '../../../services/road-taxes-form-entity.service';

@CommandHandler(DeleteManyRoadTaxesFormCommand)
export class DeleteManyRoadTaxesFormCommandHandler extends DeleteManyCommandHandler<RoadTaxesFormEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, RoadTaxesFormEntityService.name)
  }

}
