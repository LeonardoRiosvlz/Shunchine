import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace TrailerRentalErrors {
  const _context = 'TrailerRentalErrors';
  const messagesProvider = {
    en, es,
  };

  export class TrailerRentalWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'TrailerRentalWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class TrailerRentalFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'TrailerRentalFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


