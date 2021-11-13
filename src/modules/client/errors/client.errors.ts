import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ClientErrors {
  const _context = 'ClientErrors';
  const messagesProvider = {
    en, es,
  };

  export class ClientWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ClientWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ClientFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ClientFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


