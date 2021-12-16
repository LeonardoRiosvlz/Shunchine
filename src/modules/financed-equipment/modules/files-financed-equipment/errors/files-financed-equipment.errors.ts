import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesFinancedEquipmentErrors {
  const _context = 'FilesFinancedEquipmentErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesFinancedEquipmentWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesFinancedEquipmentWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesFinancedEquipmentFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesFinancedEquipmentFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


