import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesAnnualVehIspFeature } from './entities/files-annual-veh-isp.entity';
import { FilesAnnualVehIspRepository } from './repositories/files-annual-veh-isp.repository';
import { FilesAnnualVehIspCommandHandlers } from './cqrs/commands';

import { FilesAnnualVehIspMapper } from './mapper/files-annual-veh-isp.mapper';
import { FilesAnnualVehIspResolver } from './graphql/resolvers/files-annual-veh-isp.resolver';
import { FilesAnnualVehIspQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesAnnualVehIspEntityService } from './services/files-annual-veh-isp-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesAnnualVehIspFeature]),

    FilesAnnualVehIspMapper,
    FilesAnnualVehIspResolver,
    FilesAnnualVehIspRepository,
    FilesAnnualVehIspEntityService,
    FilesAnnualVehIspResolver,
    ...FilesAnnualVehIspCommandHandlers,
    ...FilesAnnualVehIspQueryHandlers,
  ],

  exports:[
    FilesAnnualVehIspRepository
  ]

})
export class FilesAnnualVehIspModule {

}
