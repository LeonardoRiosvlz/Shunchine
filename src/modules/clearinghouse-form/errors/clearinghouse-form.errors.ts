import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace ClearinghouseFormErrors {
  const _context = 'ClearinghouseFormErrors';
  const messagesProvider = {
    en, es,
  };

  export class ClearinghouseFormWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'ClearinghouseFormWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class ClearinghouseFormFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'ClearinghouseFormFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


