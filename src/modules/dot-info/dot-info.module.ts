import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { DotInfoFeature } from './entities/dot-info.entity';
import { DotInfoRepository } from './repositories/dot-info.repository';
import { DotInfoCommandHandlers } from './cqrs/commands';

import { DotInfoMapper } from './mapper/dot-info.mapper';
import { DotInfoResolver } from './graphql/resolvers/dot-info.resolver';
import { DotInfoQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { DotInfoEntityService } from './services/dot-info-entity.service';
import { FilesDotInfoModule } from './modules/files-dot-info/files-dot-info.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    FilesDotInfoModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([DotInfoFeature]),

    DotInfoMapper,
    DotInfoResolver,
    DotInfoRepository,
    DotInfoEntityService,
    DotInfoResolver,
    ...DotInfoCommandHandlers,
    ...DotInfoQueryHandlers,
  ],

})
export class DotInfoModule {

}
