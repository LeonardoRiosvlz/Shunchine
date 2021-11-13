import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace DotInfoErrors {
  const _context = 'DotInfoErrors';
  const messagesProvider = {
    en, es,
  };

  export class DotInfoWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'DotInfoWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class DotInfoFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'DotInfoFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


