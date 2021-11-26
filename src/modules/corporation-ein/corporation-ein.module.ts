import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { CorporationEinFeature } from './entities/corporation-ein.entity';
import { CorporationEinRepository } from './repositories/corporation-ein.repository';
import { CorporationEinCommandHandlers } from './cqrs/commands';

import { CorporationEinMapper } from './mapper/corporation-ein.mapper';
import { CorporationEinResolver } from './graphql/resolvers/corporation-ein.resolver';
import { CorporationEinQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { CorporationEinEntityService } from './services/corporation-ein-entity.service';
import { FilesCorporationEinModule } from './modules/files-corporation-ein/files-corporation-ein.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    FilesCorporationEinModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([CorporationEinFeature]),

    CorporationEinMapper,
    CorporationEinResolver,
    CorporationEinRepository,
    CorporationEinEntityService,
    CorporationEinResolver,
    ...CorporationEinCommandHandlers,
    ...CorporationEinQueryHandlers,
  ],

})
export class CorporationEinModule {

}
