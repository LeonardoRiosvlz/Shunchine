import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ContextId, ModuleRef } from '@nestjs/core';
import { OnTranscodeErrorEvent } from '../impl/on-transcode-error-event';
import { first } from 'lodash';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { AppCQRSBus } from 'src/shared/modules/app-cqrs/services/AppCQRSBus';

import { Result } from 'src/shared/core/class/result';
import { UpdateTranscoderCommand } from '../../commands/impl/update-transcoder.command';
import { TranscodeStatus } from 'src/modules/transcoder/entities/transcoder.entity';
import { UserEntity } from 'src/shared/modules/user/entities/user.entity';
import { GetOneUserQuery } from 'src/shared/modules/user/cqrs/queries/impl/get-one-user.query';
import { SendNotificationCommand } from 'src/shared/modules/notification/cqrs/commands/impl/send-notification.command';
import { NotificationType } from 'src/shared/modules/notification/interfaces/IAppNotificationService';
import { OnTranscodeSuccessEvent } from '../impl/on-transcode-success-event';
import { AWSCloudService } from 'src/shared/modules/files/services/aws-cloud.service';
import { TranscodeFolderService } from 'src/modules/transcoder/services/transcode-folder.service';
import { Logger } from '@nestjs/common';
import { OnTranscodeErrorEventHandler } from './on-transcode-error-event.handler';
import { UpdateFilesCommand } from 'src/shared/modules/files/cqrs/commands/impl/update-files.command';


@EventsHandler(OnTranscodeSuccessEvent)
export class OnTranscodeSuccessEventHandler implements IEventHandler<OnTranscodeSuccessEvent> {
  constructor(
    private _moduleRef: ModuleRef,
  ) {

  }

  async handle({ request: { transcode }, contextId }: OnTranscodeSuccessEvent) {

    const cqrsBus = await this._moduleRef.resolve(IAppCQRSBus.$, contextId as ContextId, { strict: false }) as AppCQRSBus;
    const folderService = await this._moduleRef.resolve(TranscodeFolderService, contextId as ContextId, { strict: false });


    Logger.debug(`Upload ${transcode.description} to Amazon....`, OnTranscodeErrorEventHandler.name)

    const uploadOrErr = await folderService.putInAmazon(transcode)

    if (uploadOrErr.isSuccess) {
      const url = uploadOrErr.unwrap()
      await cqrsBus.execCommand<Result<void>>(new UpdateTranscoderCommand(transcode.id, {
        status: TranscodeStatus.TRANSCODED,
      }));

      await cqrsBus.execCommand<Result<void>>(new UpdateFilesCommand(transcode.mediaFile, {
        url
      }));

      await folderService.cleanMediaFolder(transcode.folder)

      await cqrsBus.execCommand(new SendNotificationCommand({
        toUser: transcode.user,
        type: NotificationType.TRANSCODE_SUCCESS,
        message: {
          en: `Transcoded file: ${transcode.description} `,
          es: `Trancodificado el archivo: ${transcode.description}`
        }

      }))



    } else {

      Logger.error(`Error while upload: ${transcode.description} to Amazon....:`, OnTranscodeErrorEventHandler.name);
      Logger.error(`${uploadOrErr.unwrapError().message}`, OnTranscodeErrorEventHandler.name);
      await cqrsBus.execCommand<Result<void>>(new UpdateTranscoderCommand(transcode.id, {
        status: TranscodeStatus.TRANSCODE_ERROR,
        options: null
      }));

      await folderService.cleanMediaFolder(transcode.folder);

    }














  }


}
