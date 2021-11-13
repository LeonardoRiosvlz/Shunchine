import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { SubstanceComplianceClearinghouseFeature } from './entities/substance-compliance-clearinghouse.entity';
import { SubstanceComplianceClearinghouseRepository } from './repositories/substance-compliance-clearinghouse.repository';
import { SubstanceComplianceClearinghouseCommandHandlers } from './cqrs/commands';

import { SubstanceComplianceClearinghouseMapper } from './mapper/substance-compliance-clearinghouse.mapper';
import { SubstanceComplianceClearinghouseResolver } from './graphql/resolvers/substance-compliance-clearinghouse.resolver';
import { SubstanceComplianceClearinghouseQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { SubstanceComplianceClearinghouseEntityService } from './services/substance-compliance-clearinghouse-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([SubstanceComplianceClearinghouseFeature]),

    SubstanceComplianceClearinghouseMapper,
    SubstanceComplianceClearinghouseResolver,
    SubstanceComplianceClearinghouseRepository,
    SubstanceComplianceClearinghouseEntityService,
    SubstanceComplianceClearinghouseResolver,
    ...SubstanceComplianceClearinghouseCommandHandlers,
    ...SubstanceComplianceClearinghouseQueryHandlers,
  ],

})
export class SubstanceComplianceClearinghouseModule {

}
