import { FilesIrpRoadTaxesEntity } from '../entities/files-irp-road-taxes.entity';

import { Injectable } from '@nestjs/common';
import { FilesIrpRoadTaxesResponse } from '../graphql/dto/responses/files-irp-road-taxes.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesIrpRoadTaxesInput } from '../graphql/dto/inputs/create-files-irp-road-taxes.input';

@Injectable()
export class FilesIrpRoadTaxesMapper implements BaseMapper<FilesIrpRoadTaxesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesIrpRoadTaxesInput>(dto: CreateFilesIrpRoadTaxesInput): FilesIrpRoadTaxesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesIrpRoadTaxesResponse>(dto: FilesIrpRoadTaxesResponse): FilesIrpRoadTaxesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesIrpRoadTaxesEntity): FilesIrpRoadTaxesResponse {
    return {
      ...persistentEntity,
      irpRoadTaxes: persistentEntity?.irpRoadTaxes ? { id: persistentEntity.irpRoadTaxes } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
