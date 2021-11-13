import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteManyDrugTestsCustFormResultsCommand } from '../impl/delete-many-drug-tests-cust-form-results.command';
import { ModuleRef } from '@nestjs/core';
import { DeleteManyCommandHandler } from 'src/shared/modules/app-cqrs/commands/handler/delete-many-command.handler';
import { DrugTestsCustFormResultsEntity } from '../../../entities/drug-tests-cust-form-results.entity';
import { DrugTestsCustFormResultsEntityService } from '../../../services/drug-tests-cust-form-results-entity.service';

@CommandHandler(DeleteManyDrugTestsCustFormResultsCommand)
export class DeleteManyDrugTestsCustFormResultsCommandHandler extends DeleteManyCommandHandler<DrugTestsCustFormResultsEntity> {
  constructor(
     readonly _moduleRef:ModuleRef
  ) {
    super(_moduleRef, DrugTestsCustFormResultsEntityService.name)
  }

}
