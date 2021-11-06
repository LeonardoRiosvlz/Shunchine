import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FfmpgTemplateErrors {
  const _context = 'FfmpgTemplateErrors';
  const messagesProvider = {
    en, es,
  };

  export class FfmpgTemplateWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FfmpgTemplateWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FfmpgTemplateFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FfmpgTemplateFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


