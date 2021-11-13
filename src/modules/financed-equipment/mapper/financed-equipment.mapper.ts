import { FinancedEquipmentEntity } from '../entities/financed-equipment.entity';

import { Injectable } from '@nestjs/common';
import { FinancedEquipmentResponse } from '../graphql/dto/responses/financed-equipment.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFinancedEquipmentInput } from '../graphql/dto/inputs/create-financed-equipment.input';

@Injectable()
export class FinancedEquipmentMapper implements BaseMapper<FinancedEquipmentEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFinancedEquipmentInput>(dto: CreateFinancedEquipmentInput): FinancedEquipmentEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FinancedEquipmentResponse>(dto: FinancedEquipmentResponse): FinancedEquipmentEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FinancedEquipmentEntity): FinancedEquipmentResponse {
    return {
      ...persistentEntity,
      financeAgreementDocuments: persistentEntity?.financeAgreementDocuments ? { id: persistentEntity.financeAgreementDocuments } : undefined,
      repairsCostReceiptsFile: persistentEntity?.repairsCostReceiptsFile ? { id: persistentEntity.repairsCostReceiptsFile } : undefined,
      payOffList: persistentEntity?.payOffList ? { id: persistentEntity.payOffList } : undefined,
    };
  }

}
