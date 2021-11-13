import { GetAllQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-all.query';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { GetAllDto } from 'src/shared/dto/get-all.dto';

export class GetAllSubstanceComplianceClearinghouseQuery extends GetAllQuery<SubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetAllDto<SubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
