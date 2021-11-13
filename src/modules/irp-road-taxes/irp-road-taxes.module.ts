import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { IrpRoadTaxesFeature } from './entities/irp-road-taxes.entity';
import { IrpRoadTaxesRepository } from './repositories/irp-road-taxes.repository';
import { IrpRoadTaxesCommandHandlers } from './cqrs/commands';

import { IrpRoadTaxesMapper } from './mapper/irp-road-taxes.mapper';
import { IrpRoadTaxesResolver } from './graphql/resolvers/irp-road-taxes.resolver';
import { IrpRoadTaxesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { IrpRoadTaxesEntityService } from './services/irp-road-taxes-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([IrpRoadTaxesFeature]),

    IrpRoadTaxesMapper,
    IrpRoadTaxesResolver,
    IrpRoadTaxesRepository,
    IrpRoadTaxesEntityService,
    IrpRoadTaxesResolver,
    ...IrpRoadTaxesCommandHandlers,
    ...IrpRoadTaxesQueryHandlers,
  ],

})
export class IrpRoadTaxesModule {

}
