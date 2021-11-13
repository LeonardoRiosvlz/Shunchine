import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace SubstanceComplianceClearinghouseErrors {
  const _context = 'SubstanceComplianceClearinghouseErrors';
  const messagesProvider = {
    en, es,
  };

  export class SubstanceComplianceClearinghouseWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'SubstanceComplianceClearinghouseWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class SubstanceComplianceClearinghouseFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'SubstanceComplianceClearinghouseFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


