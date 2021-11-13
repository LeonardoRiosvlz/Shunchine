import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace AnnualVehInspStateRermitsErrors {
  const _context = 'AnnualVehInspStateRermitsErrors';
  const messagesProvider = {
    en, es,
  };

  export class AnnualVehInspStateRermitsWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'AnnualVehInspStateRermitsWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class AnnualVehInspStateRermitsFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'AnnualVehInspStateRermitsFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


