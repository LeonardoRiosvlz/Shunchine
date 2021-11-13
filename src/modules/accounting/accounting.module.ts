import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { AccountingFeature } from './entities/accounting.entity';
import { AccountingRepository } from './repositories/accounting.repository';
import { AccountingCommandHandlers } from './cqrs/commands';

import { AccountingMapper } from './mapper/accounting.mapper';
import { AccountingResolver } from './graphql/resolvers/accounting.resolver';
import { AccountingQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { AccountingEntityService } from './services/accounting-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([AccountingFeature]),

    AccountingMapper,
    AccountingResolver,
    AccountingRepository,
    AccountingEntityService,
    AccountingResolver,
    ...AccountingCommandHandlers,
    ...AccountingQueryHandlers,
  ],

})
export class AccountingModule {

}
