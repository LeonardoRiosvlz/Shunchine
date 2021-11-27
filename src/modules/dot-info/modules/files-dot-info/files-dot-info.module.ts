import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesDotInfoFeature } from './entities/files-dot-info.entity';
import { FilesDotInfoRepository } from './repositories/files-dot-info.repository';
import { FilesDotInfoCommandHandlers } from './cqrs/commands';

import { FilesDotInfoMapper } from './mapper/files-dot-info.mapper';
import { FilesDotInfoResolver } from './graphql/resolvers/files-dot-info.resolver';
import { FilesDotInfoQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesDotInfoEntityService } from './services/files-dot-info-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesDotInfoFeature]),

    FilesDotInfoMapper,
    FilesDotInfoResolver,
    FilesDotInfoRepository,
    FilesDotInfoEntityService,
    FilesDotInfoResolver,
    ...FilesDotInfoCommandHandlers,
    ...FilesDotInfoQueryHandlers,
  ],
  exports:[FilesDotInfoRepository]

})
export class FilesDotInfoModule {

}
