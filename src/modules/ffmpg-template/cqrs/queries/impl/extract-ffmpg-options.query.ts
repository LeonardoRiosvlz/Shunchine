import { AppQuery } from 'src/shared/modules/app-cqrs/base/AppQuery';

export class ExtractFfmpgOptionsQuery extends AppQuery {
  constructor(public request: { entityId: string }) {
    super()
  }
}
