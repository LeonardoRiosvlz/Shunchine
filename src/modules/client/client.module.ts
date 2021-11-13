import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ClientFeature } from './entities/client.entity';
import { ClientRepository } from './repositories/client.repository';
import { ClientCommandHandlers } from './cqrs/commands';

import { ClientMapper } from './mapper/client.mapper';
import { ClientResolver } from './graphql/resolvers/client.resolver';
import { ClientQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ClientEntityService } from './services/client-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ClientFeature]),

    ClientMapper,
    ClientResolver,
    ClientRepository,
    ClientEntityService,
    ClientResolver,
    ...ClientCommandHandlers,
    ...ClientQueryHandlers,
  ],

})
export class ClientModule {

}
