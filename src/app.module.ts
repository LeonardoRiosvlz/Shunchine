import { Module } from '@nestjs/common';
import { AppConfigService } from './shared/modules/config/service/app-config-service';
import { DataAccessModule } from './shared/modules/data-access/data-access.module';
import { AppGraphqlModule } from './shared/modules/graphql/graphql.module';
import { TenantModule } from './shared/modules/tenant/tenant.module';
import { UserModule } from './shared/modules/user/user.module';
import { AuthModule } from './shared/modules/auth/auth.module';
import { FilesModule } from './shared/modules/files/files.module';
import { NotificationModule } from './shared/modules/notification/notification.module';
import { FixturesModule } from './shared/modules/fixtures/fixtures.module';
import { ClientModule } from './modules/client/client.module';
import { TaxesModule } from './modules/taxes/taxes.module';
import { CorporationEinModule } from './modules/corporation-ein/corporation-ein.module';
import { IrpRoadTaxesModule } from './modules/irp-road-taxes/irp-road-taxes.module';
import { IftaFuelTaxesModule } from './modules/ifta-fuel-taxes/ifta-fuel-taxes.module';
import { DotInfoModule } from './modules/dot-info/dot-info.module';
import { SubstanceComplianceClearinghouseModule } from './modules/substance-compliance-clearinghouse/substance-compliance-clearinghouse.module';
import { DriverFilesModule } from './modules/driver-files/driver-files.module';
import { AnnualVehInspStateRermitsModule } from './modules/annual-veh-insp-state-rermits/annual-veh-insp-state-rermits.module';
import { TrailerRentalModule } from './modules/trailer-rental/trailer-rental.module';

@Module({
  imports: [
    AppConfigService,
    AppGraphqlModule,
    DataAccessModule,
    TenantModule,
    UserModule,
    AuthModule,
    FilesModule,
    NotificationModule,
    ClientModule,
    TaxesModule,
    CorporationEinModule,
    IrpRoadTaxesModule,
    IftaFuelTaxesModule,
    SubstanceComplianceClearinghouseModule,
    DriverFilesModule,
    DotInfoModule,
    AnnualVehInspStateRermitsModule,
    TrailerRentalModule,
    FixturesModule,

  ],

  controllers: [],
  providers: [],
})
export class AppModule { }
