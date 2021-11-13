import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace AccountingErrors {
  const _context = 'AccountingErrors';
  const messagesProvider = {
    en, es,
  };

  export class AccountingWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'AccountingWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class AccountingFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'AccountingFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


