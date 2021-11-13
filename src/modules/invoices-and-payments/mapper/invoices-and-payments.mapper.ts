import { InvoicesAndPaymentsEntity } from '../entities/invoices-and-payments.entity';

import { Injectable } from '@nestjs/common';
import { InvoicesAndPaymentsResponse } from '../graphql/dto/responses/invoices-and-payments.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateInvoicesAndPaymentsInput } from '../graphql/dto/inputs/create-invoices-and-payments.input';

@Injectable()
export class InvoicesAndPaymentsMapper implements BaseMapper<InvoicesAndPaymentsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateInvoicesAndPaymentsInput>(dto: CreateInvoicesAndPaymentsInput): InvoicesAndPaymentsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = InvoicesAndPaymentsResponse>(dto: InvoicesAndPaymentsResponse): InvoicesAndPaymentsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: InvoicesAndPaymentsEntity): InvoicesAndPaymentsResponse {
    return {
      ...persistentEntity,
    };
  }

}
