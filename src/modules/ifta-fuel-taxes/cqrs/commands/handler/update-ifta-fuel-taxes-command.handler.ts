import { CommandHandler } from '@nestjs/cqrs';
import { UpdateIftaFuelTaxesCommand } from '../impl/update-ifta-fuel-taxes.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { IftaFuelTaxesEntityService } from '../../../services/ifta-fuel-taxes-entity.service';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';

@CommandHandler(UpdateIftaFuelTaxesCommand)
export class UpdateIftaFuelTaxesCommandHandler extends UpdateCommandHandler<IftaFuelTaxesEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, IftaFuelTaxesEntityService.name)
  }

}
