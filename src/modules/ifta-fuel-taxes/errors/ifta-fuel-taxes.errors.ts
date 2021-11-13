import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace IftaFuelTaxesErrors {
  const _context = 'IftaFuelTaxesErrors';
  const messagesProvider = {
    en, es,
  };

  export class IftaFuelTaxesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'IftaFuelTaxesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class IftaFuelTaxesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'IftaFuelTaxesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


