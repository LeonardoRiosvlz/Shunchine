import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesIftaFuelTaxesErrors {
  const _context = 'FilesIftaFuelTaxesErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesIftaFuelTaxesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesIftaFuelTaxesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesIftaFuelTaxesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesIftaFuelTaxesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


