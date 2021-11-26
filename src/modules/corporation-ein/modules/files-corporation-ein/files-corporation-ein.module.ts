import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesCorporationEinFeature } from './entities/files-corporation-ein.entity';
import { FilesCorporationEinRepository } from './repositories/files-corporation-ein.repository';
import { FilesCorporationEinCommandHandlers } from './cqrs/commands';

import { FilesCorporationEinMapper } from './mapper/files-corporation-ein.mapper';
import { FilesCorporationEinResolver } from './graphql/resolvers/files-corporation-ein.resolver';
import { FilesCorporationEinQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesCorporationEinEntityService } from './services/files-corporation-ein-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesCorporationEinFeature]),

    FilesCorporationEinMapper,
    FilesCorporationEinResolver,
    FilesCorporationEinRepository,
    FilesCorporationEinEntityService,
    FilesCorporationEinResolver,
    ...FilesCorporationEinCommandHandlers,
    ...FilesCorporationEinQueryHandlers,
  ],
  exports:[FilesCorporationEinRepository]
})
export class FilesCorporationEinModule {

}
