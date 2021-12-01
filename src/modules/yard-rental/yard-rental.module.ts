import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { YardRentalFeature } from './entities/yard-rental.entity';
import { YardRentalRepository } from './repositories/yard-rental.repository';
import { YardRentalCommandHandlers } from './cqrs/commands';

import { YardRentalMapper } from './mapper/yard-rental.mapper';
import { YardRentalResolver } from './graphql/resolvers/yard-rental.resolver';
import { YardRentalQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { YardRentalEntityService } from './services/yard-rental-entity.service';
import { FilesYardRentalModule } from './modules/files-yard-rental/files-yard-rental.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    FilesYardRentalModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([YardRentalFeature]),

    YardRentalMapper,
    YardRentalResolver,
    YardRentalRepository,
    YardRentalEntityService,
    YardRentalResolver,
    ...YardRentalCommandHandlers,
    ...YardRentalQueryHandlers,
  ],

})
export class YardRentalModule {

}
