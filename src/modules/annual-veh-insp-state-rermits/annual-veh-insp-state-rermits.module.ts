import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { AnnualVehInspStateRermitsFeature } from './entities/annual-veh-insp-state-rermits.entity';
import { AnnualVehInspStateRermitsRepository } from './repositories/annual-veh-insp-state-rermits.repository';
import { AnnualVehInspStateRermitsCommandHandlers } from './cqrs/commands';

import { AnnualVehInspStateRermitsMapper } from './mapper/annual-veh-insp-state-rermits.mapper';
import { AnnualVehInspStateRermitsResolver } from './graphql/resolvers/annual-veh-insp-state-rermits.resolver';
import { AnnualVehInspStateRermitsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { AnnualVehInspStateRermitsEntityService } from './services/annual-veh-insp-state-rermits-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([AnnualVehInspStateRermitsFeature]),

    AnnualVehInspStateRermitsMapper,
    AnnualVehInspStateRermitsResolver,
    AnnualVehInspStateRermitsRepository,
    AnnualVehInspStateRermitsEntityService,
    AnnualVehInspStateRermitsResolver,
    ...AnnualVehInspStateRermitsCommandHandlers,
    ...AnnualVehInspStateRermitsQueryHandlers,
  ],

})
export class AnnualVehInspStateRermitsModule {

}
