import * as en from './i18n/en.json';
import * as es from './i18n/es.json';
import { BaseError } from 'src/shared/core/class/base.error';

export namespace FilesSubstanceComplianceClearinghouseErrors {
  const _context = 'FilesSubstanceComplianceClearinghouseErrors';
  const messagesProvider = {
    en, es,
  };

  export class FilesSubstanceComplianceClearinghouseWithIdDoesNotExist extends BaseError {
    constructor(readonly id: string) {
      super({
        name: 'FilesSubstanceComplianceClearinghouseWithIdDoesNotExist',
        context: _context,
        internationalization: {
          variables: {id},
          messagesProvider
        }
      });
    }
  }


  export class FilesSubstanceComplianceClearinghouseFieldUsed extends BaseError {
    constructor(field: string, value: string) {
      super({
        name: 'FilesSubstanceComplianceClearinghouseFieldUsed',
        context: _context,
        internationalization: {
          variables: {field, value},
          messagesProvider
        }
      });
    }
  }

}


