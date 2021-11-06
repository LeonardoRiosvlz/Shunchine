import { TranscoderEntity } from 'src/modules/transcoder/entities/transcoder.entity';
import { AppEvent } from 'src/shared/modules/app-cqrs/base/AppEvent';

export class OnTranscodeSuccessEvent extends AppEvent {
  constructor(public readonly request: {transcode: TranscoderEntity}) {
    super();
  }
}