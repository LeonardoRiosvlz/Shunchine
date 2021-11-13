import { GetPaginatedQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-paginated.query';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { GetPaginatedDto } from 'src/shared/dto/get-paginated.dto';

export class GetPaginatedSubstanceComplianceClearinghouseQuery extends GetPaginatedQuery<SubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetPaginatedDto<SubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
