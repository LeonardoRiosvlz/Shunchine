import { GetAllSubstanceComplianceClearinghouseQueryHandler } from './handler/get-all-substance-compliance-clearinghouse-query.handler';
import { GetPaginatedSubstanceComplianceClearinghouseQueryHandler } from './handler/get-paginated-substance-compliance-clearinghouse-query.handler';
import { GetOneSubstanceComplianceClearinghouseQueryHandler } from './handler/get-one-substance-compliance-clearinghouse-query.handler';
import { Provider } from '@nestjs/common';

export const SubstanceComplianceClearinghouseQueryHandlers:Array<Provider> = [
  GetAllSubstanceComplianceClearinghouseQueryHandler,
  GetPaginatedSubstanceComplianceClearinghouseQueryHandler,
  GetOneSubstanceComplianceClearinghouseQueryHandler,
];
