import { FilesAnnualVehIspEntity } from '../entities/files-annual-veh-isp.entity';

import { Injectable } from '@nestjs/common';
import { FilesAnnualVehIspResponse } from '../graphql/dto/responses/files-annual-veh-isp.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesAnnualVehIspInput } from '../graphql/dto/inputs/create-files-annual-veh-isp.input';

@Injectable()
export class FilesAnnualVehIspMapper implements BaseMapper<FilesAnnualVehIspEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesAnnualVehIspInput>(dto: CreateFilesAnnualVehIspInput): FilesAnnualVehIspEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesAnnualVehIspResponse>(dto: FilesAnnualVehIspResponse): FilesAnnualVehIspEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesAnnualVehIspEntity): FilesAnnualVehIspResponse {
    return {
      ...persistentEntity,
      annualVehInsp: persistentEntity?.annualVehInsp ? { id: persistentEntity.annualVehInsp } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
