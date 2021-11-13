import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace YardRentalErrors {
  const _context = 'YardRentalErrors';
  const messagesProvider = {
    en, es,
  };

  export class YardRentalWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'YardRentalWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class YardRentalFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'YardRentalFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


