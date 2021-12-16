import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { RoadTaxesFormEntity } from '../../../entities/road-taxes-form.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManyRoadTaxesFormCommand extends DeleteManyCommand<RoadTaxesFormEntity>{
  constructor(public request: GetOneDto<RoadTaxesFormEntity>) {
    super(request)
  }
}
