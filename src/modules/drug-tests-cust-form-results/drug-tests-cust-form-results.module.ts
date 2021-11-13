import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { DrugTestsCustFormResultsFeature } from './entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsRepository } from './repositories/drug-tests-cust-form-results.repository';
import { DrugTestsCustFormResultsCommandHandlers } from './cqrs/commands';

import { DrugTestsCustFormResultsMapper } from './mapper/drug-tests-cust-form-results.mapper';
import { DrugTestsCustFormResultsResolver } from './graphql/resolvers/drug-tests-cust-form-results.resolver';
import { DrugTestsCustFormResultsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { DrugTestsCustFormResultsEntityService } from './services/drug-tests-cust-form-results-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([DrugTestsCustFormResultsFeature]),

    DrugTestsCustFormResultsMapper,
    DrugTestsCustFormResultsResolver,
    DrugTestsCustFormResultsRepository,
    DrugTestsCustFormResultsEntityService,
    DrugTestsCustFormResultsResolver,
    ...DrugTestsCustFormResultsCommandHandlers,
    ...DrugTestsCustFormResultsQueryHandlers,
  ],

})
export class DrugTestsCustFormResultsModule {

}
