import { Module } from '@nestjs/common';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { FilesFinancedEquipmentFeature } from './entities/files-financed-equipment.entity';
import { FilesFinancedEquipmentRepository } from './repositories/files-financed-equipment.repository';
import { FilesFinancedEquipmentCommandHandlers } from './cqrs/commands';

import { FilesFinancedEquipmentMapper } from './mapper/files-financed-equipment.mapper';
import { FilesFinancedEquipmentResolver } from './graphql/resolvers/files-financed-equipment.resolver';
import { FilesFinancedEquipmentQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { FilesFinancedEquipmentEntityService } from './services/files-financed-equipment-entity.service';

@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    AppCqrsModule,
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([FilesFinancedEquipmentFeature]),

    FilesFinancedEquipmentMapper,
    FilesFinancedEquipmentResolver,
    FilesFinancedEquipmentRepository,
    FilesFinancedEquipmentEntityService,
    FilesFinancedEquipmentResolver,
    ...FilesFinancedEquipmentCommandHandlers,
    ...FilesFinancedEquipmentQueryHandlers,
  ],
  exports:[
    FilesFinancedEquipmentRepository
  ]

})
export class FilesFinancedEquipmentModule {

}
