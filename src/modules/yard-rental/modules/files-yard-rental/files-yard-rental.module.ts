import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesYardRentalFeature } from './entities/files-yard-rental.entity';
import { FilesYardRentalRepository } from './repositories/files-yard-rental.repository';
import { FilesYardRentalCommandHandlers } from './cqrs/commands';

import { FilesYardRentalMapper } from './mapper/files-yard-rental.mapper';
import { FilesYardRentalResolver } from './graphql/resolvers/files-yard-rental.resolver';
import { FilesYardRentalQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesYardRentalEntityService } from './services/files-yard-rental-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesYardRentalFeature]),

    FilesYardRentalMapper,
    FilesYardRentalResolver,
    FilesYardRentalRepository,
    FilesYardRentalEntityService,
    FilesYardRentalResolver,
    ...FilesYardRentalCommandHandlers,
    ...FilesYardRentalQueryHandlers,
  ],
  exports:[
    FilesYardRentalRepository
  ]

})
export class FilesYardRentalModule {

}
