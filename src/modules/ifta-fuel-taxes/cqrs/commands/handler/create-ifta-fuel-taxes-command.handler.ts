import { CommandHandler } from '@nestjs/cqrs';

import { CreateIftaFuelTaxesCommand } from '../impl/create-ifta-fuel-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesEntityService } from '../../../services/ifta-fuel-taxes-entity.service';

@CommandHandler(CreateIftaFuelTaxesCommand)
export class CreateIftaFuelTaxesCommandHandler extends CreateCommandHandler<IftaFuelTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, IftaFuelTaxesEntityService.name);
  }

}
