import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace TranscoderErrors {
  const _context = 'TranscoderErrors';
  const messagesProvider = {
    en, es,
  };

  export class TranscoderWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'TranscoderWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class TranscoderFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'TranscoderFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

  export class TranscoderMediaNoFound extends BaseError {
    constructor() {
      super({
        name: 'TranscoderMediaNoFound',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class TranscodeInitError extends BaseError {
    constructor() {
      super({
        name: 'TranscodeInitError',
        context: _context,
        internationalization: {
          variables: {},
          messagesProvider
        }
      });
    }
  }

  export class TranscodeError extends BaseError {
    constructor(readonly err: Error) {
      super({
        name: 'TranscodeError',
        context: _context,
        internationalization: {
          variables: {error: err?.message },
          messagesProvider
        }
      });
    }
  }

  export class MediaInfoError extends BaseError {
    constructor(readonly mediaPath: string) {
      super({
        name: 'MediaInfoError',
        context: _context,
        internationalization: {
          variables: {mediaPath },
          messagesProvider
        }
      });
    }
  }

  export class NoFfmpgOptionsError extends BaseError {
    constructor() {
      super({
        name: 'NoFfmpgOptionsError',
        context: _context,
        internationalization: {
          variables: { },
          messagesProvider
        }
      });
    }
  }

}


