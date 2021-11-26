import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesIrpRoadTaxesFeature } from './entities/files-irp-road-taxes.entity';
import { FilesIrpRoadTaxesRepository } from './repositories/files-irp-road-taxes.repository';
import { FilesIrpRoadTaxesCommandHandlers } from './cqrs/commands';

import { FilesIrpRoadTaxesMapper } from './mapper/files-irp-road-taxes.mapper';
import { FilesIrpRoadTaxesResolver } from './graphql/resolvers/files-irp-road-taxes.resolver';
import { FilesIrpRoadTaxesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesIrpRoadTaxesEntityService } from './services/files-irp-road-taxes-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesIrpRoadTaxesFeature]),

    FilesIrpRoadTaxesMapper,
    FilesIrpRoadTaxesResolver,
    FilesIrpRoadTaxesRepository,
    FilesIrpRoadTaxesEntityService,
    FilesIrpRoadTaxesResolver,
    ...FilesIrpRoadTaxesCommandHandlers,
    ...FilesIrpRoadTaxesQueryHandlers,
  ],
  exports:[
    FilesIrpRoadTaxesRepository
  ]

})
export class FilesIrpRoadTaxesModule {

}
