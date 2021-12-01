import { FilesYardRentalEntity } from '../entities/files-yard-rental.entity';

import { Injectable } from '@nestjs/common';
import { FilesYardRentalResponse } from '../graphql/dto/responses/files-yard-rental.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesYardRentalInput } from '../graphql/dto/inputs/create-files-yard-rental.input';

@Injectable()
export class FilesYardRentalMapper implements BaseMapper<FilesYardRentalEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesYardRentalInput>(dto: CreateFilesYardRentalInput): FilesYardRentalEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesYardRentalResponse>(dto: FilesYardRentalResponse): FilesYardRentalEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesYardRentalEntity): FilesYardRentalResponse {
    return {
      ...persistentEntity,
      yardRental: persistentEntity?.yardRental ? { id: persistentEntity.yardRental } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
