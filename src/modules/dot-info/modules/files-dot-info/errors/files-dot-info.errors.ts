import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesDotInfoErrors {
  const _context = 'FilesDotInfoErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesDotInfoWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesDotInfoWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesDotInfoFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesDotInfoFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


