import { DeleteManyCommand } from 'src/shared/modules/app-cqrs/commands/impl/delete-many.command';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class DeleteManySubstanceComplianceClearinghouseCommand extends DeleteManyCommand<SubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetOneDto<SubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
