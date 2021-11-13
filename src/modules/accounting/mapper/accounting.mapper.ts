import { AccountingEntity } from '../entities/accounting.entity';

import { Injectable } from '@nestjs/common';
import { AccountingResponse } from '../graphql/dto/responses/accounting.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateAccountingInput } from '../graphql/dto/inputs/create-accounting.input';

@Injectable()
export class AccountingMapper implements BaseMapper<AccountingEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateAccountingInput>(dto: CreateAccountingInput): AccountingEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = AccountingResponse>(dto: AccountingResponse): AccountingEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: AccountingEntity): AccountingResponse {
    return {
      ...persistentEntity,
    };
  }

}
