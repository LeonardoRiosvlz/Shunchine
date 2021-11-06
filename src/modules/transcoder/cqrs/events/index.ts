import { OnTranscodeErrorEventHandler } from './handler/on-transcode-error-event.handler';
import { OnTranscodeSuccessEventHandler } from './handler/on-transcode-success-event.handler';


export const TranscoderEventsHandlers = [OnTranscodeSuccessEventHandler, OnTranscodeErrorEventHandler]