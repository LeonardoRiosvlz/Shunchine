import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesIrpRoadTaxesErrors {
  const _context = 'FilesIrpRoadTaxesErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesIrpRoadTaxesWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesIrpRoadTaxesWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesIrpRoadTaxesFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesIrpRoadTaxesFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


