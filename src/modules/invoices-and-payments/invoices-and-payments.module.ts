import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { InvoicesAndPaymentsFeature } from './entities/invoices-and-payments.entity';
import { InvoicesAndPaymentsRepository } from './repositories/invoices-and-payments.repository';
import { InvoicesAndPaymentsCommandHandlers } from './cqrs/commands';

import { InvoicesAndPaymentsMapper } from './mapper/invoices-and-payments.mapper';
import { InvoicesAndPaymentsResolver } from './graphql/resolvers/invoices-and-payments.resolver';
import { InvoicesAndPaymentsQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { InvoicesAndPaymentsEntityService } from './services/invoices-and-payments-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([InvoicesAndPaymentsFeature]),

    InvoicesAndPaymentsMapper,
    InvoicesAndPaymentsResolver,
    InvoicesAndPaymentsRepository,
    InvoicesAndPaymentsEntityService,
    InvoicesAndPaymentsResolver,
    ...InvoicesAndPaymentsCommandHandlers,
    ...InvoicesAndPaymentsQueryHandlers,
  ],

})
export class InvoicesAndPaymentsModule {

}
