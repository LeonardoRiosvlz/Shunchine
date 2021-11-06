import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FfmpgOptionFeature } from './entities/ffmpg-option.entity';
import { FfmpgOptionRepository } from './repositories/ffmpg-option.repository';
import { FfmpgOptionCommandHandlers } from './cqrs/commands';

import { FfmpgOptionMapper } from './mapper/ffmpg-option.mapper';
import { FfmpgOptionResolver } from './graphql/resolvers/ffmpg-option.resolver';
import { FfmpgOptionQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FfmpgOptionEntityService } from './services/ffmpg-option-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FfmpgOptionFeature]),

    FfmpgOptionMapper,
    FfmpgOptionResolver,
    FfmpgOptionRepository,
    FfmpgOptionEntityService,
    FfmpgOptionResolver,
    ...FfmpgOptionCommandHandlers,
    ...FfmpgOptionQueryHandlers,
  ],

})
export class FfmpgOptionModule {

}
