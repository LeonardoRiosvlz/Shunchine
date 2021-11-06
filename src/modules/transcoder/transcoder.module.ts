import { Module } from '@nestjs/common';
import { set } from 'lodash';
import { AppGraphqlModule } from 'src/shared/modules/graphql/graphql.module';
import { AppConfigModule } from 'src/shared/modules/config/app-config.module';
import { DataAccessModule } from 'src/shared/modules/data-access/data-access.module';
import { TranscoderFeature } from './entities/transcoder.entity';
import { TranscoderRepository } from './repositories/transcoder.repository';
import { TranscoderCommandHandlers } from './cqrs/commands';

import { TranscoderMapper } from './mapper/transcoder.mapper';
import { TranscoderResolver } from './graphql/resolvers/transcoder.resolver';
import { TranscoderQueryHandlers } from './cqrs/queries';
import { TenantModule } from 'src/shared/modules/tenant/tenant.module';
import { TenantUtils } from 'src/shared/modules/tenant/utils/tenant.utils';
import { AppCqrsModule } from 'src/shared/modules/app-cqrs/app-cqrs.module';
import { TranscoderEntityService } from './services/transcoder-entity.service';
import { BullModule, BullModuleOptions } from '@nestjs/bull';
import { AppConfigService } from 'src/shared/modules/config/service/app-config-service';
import { TranscodeProcessor } from './processor/transcode-processor';
import { AppTranscodeService } from './services/app-transcoder.service';
import { TranscodeOptionsFeature } from './entities/schemas/transcode-options.schema';
import { PreTranscodeService } from './services/pre-transcode.service';
import { TranscoderEventsHandlers } from './cqrs/events';
import { TranscodeFolderService } from './services/transcode-folder.service';
import { TranscoderOptionResolver } from './graphql/resolvers/transcoder-option.resolver';
import { FilesModule } from 'src/shared/modules/files/files.module';


@Module({
  imports: [
    AppGraphqlModule,
    AppConfigModule,
    DataAccessModule,
    TenantModule,
    FilesModule,
    AppCqrsModule,

    BullModule.registerQueueAsync({
      name: 'transcode',
      inject: [AppConfigService],
      useFactory: (_config: AppConfigService): BullModuleOptions => {

        const redis = {
          host: _config.redis.host,
          port: +_config.redis.port,
        };
        const pass = _config.redis.password;
        if (pass) {
          set(redis, 'password', pass);
        }
        return {
          name: 'transcode',
          defaultJobOptions: {
            removeOnFail: true,
            removeOnComplete: true,
          },
        redis
         
        };
      },
    }),
  ],
  providers: [
    ...TenantUtils.buildTenantEntityProvider([TranscoderFeature, TranscodeOptionsFeature]),
    TranscoderMapper,
    TranscoderResolver,
    TranscoderRepository,
    TranscoderEntityService,
    TranscoderResolver,
    TranscoderOptionResolver,
    ...TranscoderCommandHandlers,
    ...TranscoderQueryHandlers,
    ...TranscoderEventsHandlers,
    TranscodeProcessor,
    TranscodeFolderService,
    PreTranscodeService,
    AppTranscodeService
  ],

})
export class TranscoderModule {

}
