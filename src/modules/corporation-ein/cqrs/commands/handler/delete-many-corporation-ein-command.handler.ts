import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyCorporationEinCommand } from '../impl/delete-many-corporation-ein.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { CorporationEinEntityService } from '../../../services/corporation-ein-entity.service';

@CommandHandler(DeleteManyCorporationEinCommand)
export class DeleteManyCorporationEinCommandHandler extends DeleteManyCommandHandler<CorporationEinEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, CorporationEinEntityService.name)
  }

}
