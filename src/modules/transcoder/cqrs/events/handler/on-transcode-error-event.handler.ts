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
import { TranscodeFolderService } from 'src/modules/transcoder/services/transcode-folder.service';


@EventsHandler(OnTranscodeErrorEvent)
export class OnTranscodeErrorEventHandler implements IEventHandler<OnTranscodeErrorEvent> {
  constructor(
    private _moduleRef: ModuleRef,
  ) {

  }

  async handle({ request: { transcode, error }, contextId }: OnTranscodeErrorEvent) {

    const cqrsBus = await this._moduleRef.resolve(IAppCQRSBus.$, contextId as ContextId, { strict: false }) as AppCQRSBus;
    const folderService = await this._moduleRef.resolve(TranscodeFolderService, contextId as ContextId, { strict: false });

    await cqrsBus.execCommand<Result<void>>(new UpdateTranscoderCommand(transcode.id, {
      status: TranscodeStatus.TRANSCODE_ERROR,
      options: null
    }));

    await folderService.cleanMediaFolder(transcode.folder)

    await cqrsBus.execCommand(new SendNotificationCommand({
      toUser: transcode.user,
      type: NotificationType.TRANSCODE_ERROR,
      message: {
        en: `Han Error Occurred: ${error?.toString()}`,
        es: `Ocurrió un error al transcodificar: ${error?.toString()}`
      }

    }))
  }
}
