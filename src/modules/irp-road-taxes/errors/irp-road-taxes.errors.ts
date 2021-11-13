import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace IrpRoadTaxesErrors {
  const _context = 'IrpRoadTaxesErrors';
  const messagesProvider = {
    en, es,
  };

  export class IrpRoadTaxesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'IrpRoadTaxesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class IrpRoadTaxesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'IrpRoadTaxesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


