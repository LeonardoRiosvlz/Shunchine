import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyIftaFuelTaxesCommand } from '../impl/delete-many-ifta-fuel-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesEntityService } from '../../../services/ifta-fuel-taxes-entity.service';

@CommandHandler(DeleteManyIftaFuelTaxesCommand)
export class DeleteManyIftaFuelTaxesCommandHandler extends DeleteManyCommandHandler<IftaFuelTaxesEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, IftaFuelTaxesEntityService.name)
  }

}
