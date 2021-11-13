import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace DrugTestsCustFormResultsErrors {
  const _context = 'DrugTestsCustFormResultsErrors';
  const messagesProvider = {
    en, es,
  };

  export class DrugTestsCustFormResultsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'DrugTestsCustFormResultsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class DrugTestsCustFormResultsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'DrugTestsCustFormResultsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


