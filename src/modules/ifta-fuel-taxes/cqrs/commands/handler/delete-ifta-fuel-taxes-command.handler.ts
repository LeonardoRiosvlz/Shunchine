import { CommandHandler } from '@nestjs/cqrs';
import { DeleteIftaFuelTaxesCommand } from '../impl/delete-ifta-fuel-taxes.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesEntityService } from '../../../services/ifta-fuel-taxes-entity.service';

@CommandHandler(DeleteIftaFuelTaxesCommand)
export class DeleteIftaFuelTaxesCommandHandler extends DeleteCommandHandler<IftaFuelTaxesEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, IftaFuelTaxesEntityService.name)
  }
}
