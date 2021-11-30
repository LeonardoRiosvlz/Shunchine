import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesTrailerRentalFeature } from './entities/files-trailer-rental.entity';
import { FilesTrailerRentalRepository } from './repositories/files-trailer-rental.repository';
import { FilesTrailerRentalCommandHandlers } from './cqrs/commands';

import { FilesTrailerRentalMapper } from './mapper/files-trailer-rental.mapper';
import { FilesTrailerRentalResolver } from './graphql/resolvers/files-trailer-rental.resolver';
import { FilesTrailerRentalQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesTrailerRentalEntityService } from './services/files-trailer-rental-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesTrailerRentalFeature]),

    FilesTrailerRentalMapper,
    FilesTrailerRentalResolver,
    FilesTrailerRentalRepository,
    FilesTrailerRentalEntityService,
    FilesTrailerRentalResolver,
    ...FilesTrailerRentalCommandHandlers,
    ...FilesTrailerRentalQueryHandlers,
  ],
  exports:[
    FilesTrailerRentalRepository
  ]

})
export class FilesTrailerRentalModule {

}
