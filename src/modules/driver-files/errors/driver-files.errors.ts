import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace DriverFilesErrors {
  const _context = 'DriverFilesErrors';
  const messagesProvider = {
    en, es,
  };

  export class DriverFilesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'DriverFilesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class DriverFilesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'DriverFilesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


