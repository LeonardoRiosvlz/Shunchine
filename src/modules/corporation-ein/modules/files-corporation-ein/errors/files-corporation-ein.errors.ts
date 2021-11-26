import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesCorporationEinErrors {
  const _context = 'FilesCorporationEinErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesCorporationEinWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesCorporationEinWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesCorporationEinFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesCorporationEinFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


