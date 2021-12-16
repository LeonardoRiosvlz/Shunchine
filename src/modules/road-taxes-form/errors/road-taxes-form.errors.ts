import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace RoadTaxesFormErrors {
  const _context = 'RoadTaxesFormErrors';
  const messagesProvider = {
    en, es,
  };

  export class RoadTaxesFormWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'RoadTaxesFormWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class RoadTaxesFormFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'RoadTaxesFormFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


