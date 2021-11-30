import { ObjectType } from '@nestjs/graphql';

import PaginatedFindResultResponse from 'src/shared/modules/graphql/dto/responses/paginated.entity.response';
import { FilesAnnualVehIspResponse } from './files-annual-veh-isp.response';

@ObjectType()
export class PaginatedFilesAnnualVehIspResponse extends PaginatedFindResultResponse(FilesAnnualVehIspResponse) {
}

