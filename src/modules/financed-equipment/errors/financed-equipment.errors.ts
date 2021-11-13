import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FinancedEquipmentErrors {
  const _context = 'FinancedEquipmentErrors';
  const messagesProvider = {
    en, es,
  };

  export class FinancedEquipmentWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FinancedEquipmentWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FinancedEquipmentFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FinancedEquipmentFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


