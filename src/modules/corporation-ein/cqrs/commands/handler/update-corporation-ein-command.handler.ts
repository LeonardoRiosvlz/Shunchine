import { CommandHandler } from '@nestjs/cqrs';
import { UpdateCorporationEinCommand } from '../impl/update-corporation-ein.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { CorporationEinEntityService } from '../../../services/corporation-ein-entity.service';
import { CorporationEinEntity } from '../../../entities/corporation-ein.entity';

@CommandHandler(UpdateCorporationEinCommand)
export class UpdateCorporationEinCommandHandler extends UpdateCommandHandler<CorporationEinEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, CorporationEinEntityService.name)
  }

}
