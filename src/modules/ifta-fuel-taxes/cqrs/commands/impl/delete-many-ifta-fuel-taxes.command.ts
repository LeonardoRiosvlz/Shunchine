import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { IftaFuelTaxesEntity } from '../../../entities/ifta-fuel-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyIftaFuelTaxesCommand extends DeleteManyCommand<IftaFuelTaxesEntity>{
  constructor(public request: GetOneDto<IftaFuelTaxesEntity>) {
    super(request)
  }
}
