import { GetAllFilesSubstanceComplianceClearinghouseQueryHandler } from './handler/get-all-files-substance-compliance-clearinghouse-query.handler';
import { GetPaginatedFilesSubstanceComplianceClearinghouseQueryHandler } from './handler/get-paginated-files-substance-compliance-clearinghouse-query.handler';
import { GetOneFilesSubstanceComplianceClearinghouseQueryHandler } from './handler/get-one-files-substance-compliance-clearinghouse-query.handler';
import { Provider } from '@nestjs/common';

export const FilesSubstanceComplianceClearinghouseQueryHandlers:Array<Provider> = [
  GetAllFilesSubstanceComplianceClearinghouseQueryHandler,
  GetPaginatedFilesSubstanceComplianceClearinghouseQueryHandler,
  GetOneFilesSubstanceComplianceClearinghouseQueryHandler,
];
