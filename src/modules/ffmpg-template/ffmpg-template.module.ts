import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FfmpgTemplateFeature } from './entities/ffmpg-template.entity';
import { FfmpgTemplateRepository } from './repositories/ffmpg-template.repository';
import { FfmpgTemplateCommandHandlers } from './cqrs/commands';

import { FfmpgTemplateMapper } from './mapper/ffmpg-template.mapper';
import { FfmpgTemplateResolver } from './graphql/resolvers/ffmpg-template.resolver';
import { FfmpgTemplateQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FfmpgTemplateEntityService } from './services/ffmpg-template-entity.service';
import { AppFfmpgTemplateService } from './services/app-ffmpg-template.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FfmpgTemplateFeature]),

    FfmpgTemplateMapper,
    FfmpgTemplateResolver,
    FfmpgTemplateRepository,
    FfmpgTemplateEntityService,
    FfmpgTemplateResolver,
    AppFfmpgTemplateService,
    ...FfmpgTemplateCommandHandlers,
    ...FfmpgTemplateQueryHandlers,
  ],

})
export class FfmpgTemplateModule {

}
