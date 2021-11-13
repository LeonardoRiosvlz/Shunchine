import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { DriverFilesFeature } from './entities/driver-files.entity';
import { DriverFilesRepository } from './repositories/driver-files.repository';
import { DriverFilesCommandHandlers } from './cqrs/commands';

import { DriverFilesMapper } from './mapper/driver-files.mapper';
import { DriverFilesResolver } from './graphql/resolvers/driver-files.resolver';
import { DriverFilesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { DriverFilesEntityService } from './services/driver-files-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([DriverFilesFeature]),

    DriverFilesMapper,
    DriverFilesResolver,
    DriverFilesRepository,
    DriverFilesEntityService,
    DriverFilesResolver,
    ...DriverFilesCommandHandlers,
    ...DriverFilesQueryHandlers,
  ],

})
export class DriverFilesModule {

}
