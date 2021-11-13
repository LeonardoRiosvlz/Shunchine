import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { IftaFuelTaxesFeature } from './entities/ifta-fuel-taxes.entity';
import { IftaFuelTaxesRepository } from './repositories/ifta-fuel-taxes.repository';
import { IftaFuelTaxesCommandHandlers } from './cqrs/commands';

import { IftaFuelTaxesMapper } from './mapper/ifta-fuel-taxes.mapper';
import { IftaFuelTaxesResolver } from './graphql/resolvers/ifta-fuel-taxes.resolver';
import { IftaFuelTaxesQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { IftaFuelTaxesEntityService } from './services/ifta-fuel-taxes-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([IftaFuelTaxesFeature]),

    IftaFuelTaxesMapper,
    IftaFuelTaxesResolver,
    IftaFuelTaxesRepository,
    IftaFuelTaxesEntityService,
    IftaFuelTaxesResolver,
    ...IftaFuelTaxesCommandHandlers,
    ...IftaFuelTaxesQueryHandlers,
  ],

})
export class IftaFuelTaxesModule {

}
