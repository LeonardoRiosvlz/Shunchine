import { TranscoderEntity } from 'src/modules/transcoder/entities/transcoder.entity';
import { AppEvent } from 'src/shared/modules/app-cqrs/base/AppEvent';

export class OnTranscodeErrorEvent extends AppEvent {
  constructor(public readonly request: {transcode:TranscoderEntity, error: string}) {
    super();
  }
}