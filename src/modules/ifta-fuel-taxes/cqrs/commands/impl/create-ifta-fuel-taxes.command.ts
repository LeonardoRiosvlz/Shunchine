import { CreateCommand } from 'src/shared/modules/app-cqrs/commands/impl/create.command';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';

export class CreateIftaFuelTaxesCommand extends CreateCommand<IftaFuelTaxesEntity> {
  constructor(public request: IftaFuelTaxesEntity) {
    super(request);
  }
}
