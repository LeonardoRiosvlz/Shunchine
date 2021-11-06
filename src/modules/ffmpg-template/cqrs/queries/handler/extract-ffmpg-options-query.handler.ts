import { CommandHandler, ICommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { ContextId, ModuleRef } from '@nestjs/core';
import { Result } from 'src/shared/core/class/result';
import { ExtractFfmpgOptionsQuery } from '../impl/extract-ffmpg-options.query';
import { FfmpgOptionEntity } from 'src/modules/ffmpg-option/entities/ffmpg-option.entity';
import { AppFfmpgTemplateService } from 'src/modules/ffmpg-template/services/app-ffmpg-template.service';

@QueryHandler(ExtractFfmpgOptionsQuery)
export class ExtractFfmpgOptionsQueryHandler implements IQueryHandler<ExtractFfmpgOptionsQuery> {
  constructor(
    private moduleRef: ModuleRef
  ) {

  }
  async execute({ request: { entityId }, contextId }: ExtractFfmpgOptionsQuery): Promise<Result<Array<FfmpgOptionEntity>>> {
    const service = await this.moduleRef.resolve(AppFfmpgTemplateService, contextId as ContextId);
    return service.extractOptions(entityId)
  }

}
