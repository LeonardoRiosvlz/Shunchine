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
import { TranscoderModule } from './modules/transcoder/transcoder.module';
import { FfmpgOptionModule } from './modules/ffmpg-option/ffmpg-option.module';
import { FfmpgTemplateModule } from './modules/ffmpg-template/ffmpg-template.module';

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
    TranscoderModule,
    FfmpgOptionModule,
    FfmpgTemplateModule,
    FixturesModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule { }
