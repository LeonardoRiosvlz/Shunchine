import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesIftaFuelTaxesFeature } from './entities/files-ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesRepository } from './repositories/files-ifta-fuel-taxes.repository';
import { FilesIftaFuelTaxesCommandHandlers } from './cqrs/commands';

import { FilesIftaFuelTaxesMapper } from './mapper/files-ifta-fuel-taxes.mapper';
import { FilesIftaFuelTaxesResolver } from './graphql/resolvers/files-ifta-fuel-taxes.resolver';
import { FilesIftaFuelTaxesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesIftaFuelTaxesEntityService } from './services/files-ifta-fuel-taxes-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesIftaFuelTaxesFeature]),

    FilesIftaFuelTaxesMapper,
    FilesIftaFuelTaxesResolver,
    FilesIftaFuelTaxesRepository,
    FilesIftaFuelTaxesEntityService,
    FilesIftaFuelTaxesResolver,
    ...FilesIftaFuelTaxesCommandHandlers,
    ...FilesIftaFuelTaxesQueryHandlers,
  ],
  exports:[FilesIftaFuelTaxesRepository]

})
export class FilesIftaFuelTaxesModule {

}
