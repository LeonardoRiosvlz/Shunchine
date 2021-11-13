import { CommandHandler } from '@nestjs/cqrs';
import { UpdateDrugTestsCustFormResultsCommand } from '../impl/update-drug-tests-cust-form-results.command';
import { ModuleRef } from '@nestjs/core';
import { UpdateCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/update-command.handler';
import { DrugTestsCustFormResultsEntityService } from '../../../services/drug-tests-cust-form-results-entity.service';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';

@CommandHandler(UpdateDrugTestsCustFormResultsCommand)
export class UpdateDrugTestsCustFormResultsCommandHandler extends UpdateCommandHandler<DrugTestsCustFormResultsEntity> {
  constructor(
    readonly _moduleRef: ModuleRef,
  ) {
    super(_moduleRef, DrugTestsCustFormResultsEntityService.name)
  }

}
