import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FinancedEquipmentFeature } from './entities/financed-equipment.entity';
import { FinancedEquipmentRepository } from './repositories/financed-equipment.repository';
import { FinancedEquipmentCommandHandlers } from './cqrs/commands';

import { FinancedEquipmentMapper } from './mapper/financed-equipment.mapper';
import { FinancedEquipmentResolver } from './graphql/resolvers/financed-equipment.resolver';
import { FinancedEquipmentQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FinancedEquipmentEntityService } from './services/financed-equipment-entity.service';
import { FilesFinancedEquipmentModule } from './modules/files-financed-equipment/files-financed-equipment.module';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
    FilesFinancedEquipmentModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FinancedEquipmentFeature]),

    FinancedEquipmentMapper,
    FinancedEquipmentResolver,
    FinancedEquipmentRepository,
    FinancedEquipmentEntityService,
    FinancedEquipmentResolver,
    ...FinancedEquipmentCommandHandlers,
    ...FinancedEquipmentQueryHandlers,
  ],

})
export class FinancedEquipmentModule {

}
