import { FilesIftaFuelTaxesEntity } from '../entities/files-ifta-fuel-taxes.entity';

import { Injectable } from '@nestjs/common';
import { FilesIftaFuelTaxesResponse } from '../graphql/dto/responses/files-ifta-fuel-taxes.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesIftaFuelTaxesInput } from '../graphql/dto/inputs/create-files-ifta-fuel-taxes.input';

@Injectable()
export class FilesIftaFuelTaxesMapper implements BaseMapper<FilesIftaFuelTaxesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesIftaFuelTaxesInput>(dto: CreateFilesIftaFuelTaxesInput): FilesIftaFuelTaxesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesIftaFuelTaxesResponse>(dto: FilesIftaFuelTaxesResponse): FilesIftaFuelTaxesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesIftaFuelTaxesEntity): FilesIftaFuelTaxesResponse {
    return {
      ...persistentEntity,
      iftaFuelTaxes: persistentEntity?.iftaFuelTaxes ? { id: persistentEntity.iftaFuelTaxes } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
