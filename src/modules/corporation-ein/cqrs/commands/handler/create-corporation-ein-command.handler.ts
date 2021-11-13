import { CommandHandler } from '@nestjs/cqrs';

import { CreateCorporationEinCommand } from '../impl/create-corporation-ein.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';
import { CorporationEinEntityService } from '../../../services/corporation-ein-entity.service';

@CommandHandler(CreateCorporationEinCommand)
export class CreateCorporationEinCommandHandler extends CreateCommandHandler<CorporationEinEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, CorporationEinEntityService.name);
  }

}
