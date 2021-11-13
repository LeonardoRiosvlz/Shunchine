import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { TrailerRentalFeature } from './entities/trailer-rental.entity';
import { TrailerRentalRepository } from './repositories/trailer-rental.repository';
import { TrailerRentalCommandHandlers } from './cqrs/commands';

import { TrailerRentalMapper } from './mapper/trailer-rental.mapper';
import { TrailerRentalResolver } from './graphql/resolvers/trailer-rental.resolver';
import { TrailerRentalQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { TrailerRentalEntityService } from './services/trailer-rental-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([TrailerRentalFeature]),

    TrailerRentalMapper,
    TrailerRentalResolver,
    TrailerRentalRepository,
    TrailerRentalEntityService,
    TrailerRentalResolver,
    ...TrailerRentalCommandHandlers,
    ...TrailerRentalQueryHandlers,
  ],

})
export class TrailerRentalModule {

}
