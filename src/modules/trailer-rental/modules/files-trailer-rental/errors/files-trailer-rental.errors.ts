import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesTrailerRentalErrors {
  const _context = 'FilesTrailerRentalErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesTrailerRentalWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesTrailerRentalWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesTrailerRentalFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesTrailerRentalFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


