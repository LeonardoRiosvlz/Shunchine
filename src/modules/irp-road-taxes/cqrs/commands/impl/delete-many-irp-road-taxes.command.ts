import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { IrpRoadTaxesEntity } from '../../../entities/irp-road-taxes.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyIrpRoadTaxesCommand extends DeleteManyCommand<IrpRoadTaxesEntity>{
  constructor(public request: GetOneDto<IrpRoadTaxesEntity>) {
    super(request)
  }
}
