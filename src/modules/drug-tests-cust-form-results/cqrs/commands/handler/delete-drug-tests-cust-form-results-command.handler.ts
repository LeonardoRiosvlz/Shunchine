import { CommandHandler } from '@nestjs/cqrs';
import { DeleteDrugTestsCustFormResultsCommand } from '../impl/delete-drug-tests-cust-form-results.command';
import {  ModuleRef } from '@nestjs/core';
import { DeleteCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-command.handler';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsEntityService } from '../../../services/drug-tests-cust-form-results-entity.service';

@CommandHandler(DeleteDrugTestsCustFormResultsCommand)
export class DeleteDrugTestsCustFormResultsCommandHandler extends DeleteCommandHandler<DrugTestsCustFormResultsEntity>{
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DrugTestsCustFormResultsEntityService.name)
  }
}
