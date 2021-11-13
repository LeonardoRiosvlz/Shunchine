import { DriverFilesEntity } from '../entities/driver-files.entity';

import { Injectable } from '@nestjs/common';
import { DriverFilesResponse } from '../graphql/dto/responses/driver-files.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDriverFilesInput } from '../graphql/dto/inputs/create-driver-files.input';

@Injectable()
export class DriverFilesMapper implements BaseMapper<DriverFilesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDriverFilesInput>(dto: CreateDriverFilesInput): DriverFilesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DriverFilesResponse>(dto: DriverFilesResponse): DriverFilesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: DriverFilesEntity): DriverFilesResponse {
    return {
      ...persistentEntity,
    };
  }

}
