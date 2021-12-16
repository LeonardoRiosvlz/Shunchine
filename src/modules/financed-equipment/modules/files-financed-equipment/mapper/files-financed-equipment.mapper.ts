import { FilesFinancedEquipmentEntity } from '../entities/files-financed-equipment.entity';

import { Injectable } from '@nestjs/common';
import { FilesFinancedEquipmentResponse } from '../graphql/dto/responses/files-financed-equipment.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesFinancedEquipmentInput } from '../graphql/dto/inputs/create-files-financed-equipment.input';

@Injectable()
export class FilesFinancedEquipmentMapper implements BaseMapper<FilesFinancedEquipmentEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesFinancedEquipmentInput>(dto: CreateFilesFinancedEquipmentInput): FilesFinancedEquipmentEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesFinancedEquipmentResponse>(dto: FilesFinancedEquipmentResponse): FilesFinancedEquipmentEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesFinancedEquipmentEntity): FilesFinancedEquipmentResponse {
    return {
      ...persistentEntity,
      financedEquipment: persistentEntity?.financedEquipment ? { id: persistentEntity.financedEquipment } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
