import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace CorporationEinErrors {
  const _context = 'CorporationEinErrors';
  const messagesProvider = {
    en, es,
  };

  export class CorporationEinWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'CorporationEinWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class CorporationEinFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'CorporationEinFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


