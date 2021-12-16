import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { RoadTaxesFormFeature } from './entities/road-taxes-form.entity';
import { RoadTaxesFormRepository } from './repositories/road-taxes-form.repository';
import { RoadTaxesFormCommandHandlers } from './cqrs/commands';

import { RoadTaxesFormMapper } from './mapper/road-taxes-form.mapper';
import { RoadTaxesFormResolver } from './graphql/resolvers/road-taxes-form.resolver';
import { RoadTaxesFormQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { RoadTaxesFormEntityService } from './services/road-taxes-form-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([RoadTaxesFormFeature]),

    RoadTaxesFormMapper,
    RoadTaxesFormResolver,
    RoadTaxesFormRepository,
    RoadTaxesFormEntityService,
    RoadTaxesFormResolver,
    ...RoadTaxesFormCommandHandlers,
    ...RoadTaxesFormQueryHandlers,
  ],

})
export class RoadTaxesFormModule {

}
