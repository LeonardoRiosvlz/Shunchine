import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesAnnualVehIspErrors {
  const _context = 'FilesAnnualVehIspErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesAnnualVehIspWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesAnnualVehIspWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesAnnualVehIspFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesAnnualVehIspFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


