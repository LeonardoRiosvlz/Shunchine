import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesSubstanceComplianceClearinghouseFeature } from './entities/files-substance-compliance-clearinghouse.entity';
import { FilesSubstanceComplianceClearinghouseRepository } from './repositories/files-substance-compliance-clearinghouse.repository';
import { FilesSubstanceComplianceClearinghouseCommandHandlers } from './cqrs/commands';

import { FilesSubstanceComplianceClearinghouseMapper } from './mapper/files-substance-compliance-clearinghouse.mapper';
import { FilesSubstanceComplianceClearinghouseResolver } from './graphql/resolvers/files-substance-compliance-clearinghouse.resolver';
import { FilesSubstanceComplianceClearinghouseQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesSubstanceComplianceClearinghouseEntityService } from './services/files-substance-compliance-clearinghouse-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesSubstanceComplianceClearinghouseFeature]),

    FilesSubstanceComplianceClearinghouseMapper,
    FilesSubstanceComplianceClearinghouseResolver,
    FilesSubstanceComplianceClearinghouseRepository,
    FilesSubstanceComplianceClearinghouseEntityService,
    FilesSubstanceComplianceClearinghouseResolver,
    ...FilesSubstanceComplianceClearinghouseCommandHandlers,
    ...FilesSubstanceComplianceClearinghouseQueryHandlers,
  ],
  exports:[
    FilesSubstanceComplianceClearinghouseRepository
  ]

})
export class FilesSubstanceComplianceClearinghouseModule {

}
