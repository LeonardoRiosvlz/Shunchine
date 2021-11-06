import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FfmpgOptionErrors {
  const _context = 'FfmpgOptionErrors';
  const messagesProvider = {
    en, es,
  };

  export class FfmpgOptionWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FfmpgOptionWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FfmpgOptionFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FfmpgOptionFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


