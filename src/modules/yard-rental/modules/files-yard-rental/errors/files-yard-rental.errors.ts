import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesYardRentalErrors {
  const _context = 'FilesYardRentalErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesYardRentalWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesYardRentalWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesYardRentalFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesYardRentalFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


