import { UpdateCommand } from 'src/shared/modules/app-cqrs/commands/impl/update.command';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';

export class UpdateIftaFuelTaxesCommand extends UpdateCommand<IftaFuelTaxesEntity> {
  constructor(public entityId: string, update: Partial<IftaFuelTaxesEntity>) {
    super({entityId, update});
  }
}
