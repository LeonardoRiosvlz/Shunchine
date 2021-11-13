import { CommandHandler } from '@nestjs/cqrs';

import { CreateDrugTestsCustFormResultsCommand } from '../impl/create-drug-tests-cust-form-results.command';
import { ModuleRef } from '@nestjs/core';
import { CreateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/create-command.handler';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsEntityService } from '../../../services/drug-tests-cust-form-results-entity.service';

@CommandHandler(CreateDrugTestsCustFormResultsCommand)
export class CreateDrugTestsCustFormResultsCommandHandler extends CreateCommandHandler<DrugTestsCustFormResultsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DrugTestsCustFormResultsEntityService.name);
  }

}
