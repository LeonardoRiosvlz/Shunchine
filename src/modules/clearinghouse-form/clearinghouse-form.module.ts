import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { ClearinghouseFormFeature } from './entities/clearinghouse-form.entity';
import { ClearinghouseFormRepository } from './repositories/clearinghouse-form.repository';
import { ClearinghouseFormCommandHandlers } from './cqrs/commands';

import { ClearinghouseFormMapper } from './mapper/clearinghouse-form.mapper';
import { ClearinghouseFormResolver } from './graphql/resolvers/clearinghouse-form.resolver';
import { ClearinghouseFormQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { ClearinghouseFormEntityService } from './services/clearinghouse-form-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([ClearinghouseFormFeature]),

    ClearinghouseFormMapper,
    ClearinghouseFormResolver,
    ClearinghouseFormRepository,
    ClearinghouseFormEntityService,
    ClearinghouseFormResolver,
    ...ClearinghouseFormCommandHandlers,
    ...ClearinghouseFormQueryHandlers,
  ],

})
export class ClearinghouseFormModule {

}
