import { ITranscodeOption } from 'src/modules/transcoder/interfaces/ITranscode';
import { AppCommand } from 'src/shared/modules/app-cqrs/base/AppCommand';

export class TranscodeCommand extends AppCommand {
  constructor(public request: { entityId: string, options?: ITranscodeOption }) {
    super();
  }
}
