import { GetOneQuery } from 'src/shared/modules/app-cqrs/queries/impl/get-one.query';
import { SubstanceComplianceClearinghouseEntity } from '../../../entities/substance-compliance-clearinghouse.entity';
import { GetOneDto } from 'src/shared/dto/get-one.dto';

export class GetOneSubstanceComplianceClearinghouseQuery extends GetOneQuery<SubstanceComplianceClearinghouseEntity>{
  constructor(public request: GetOneDto<SubstanceComplianceClearinghouseEntity>) {
    super(request)
  }
}
