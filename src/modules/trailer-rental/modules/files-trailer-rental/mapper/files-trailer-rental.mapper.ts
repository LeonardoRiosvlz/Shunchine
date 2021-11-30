import { FilesTrailerRentalEntity } from '../entities/files-trailer-rental.entity';

import { Injectable } from '@nestjs/common';
import { FilesTrailerRentalResponse } from '../graphql/dto/responses/files-trailer-rental.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesTrailerRentalInput } from '../graphql/dto/inputs/create-files-trailer-rental.input';

@Injectable()
export class FilesTrailerRentalMapper implements BaseMapper<FilesTrailerRentalEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesTrailerRentalInput>(dto: CreateFilesTrailerRentalInput): FilesTrailerRentalEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesTrailerRentalResponse>(dto: FilesTrailerRentalResponse): FilesTrailerRentalEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesTrailerRentalEntity): FilesTrailerRentalResponse {
    return {
      ...persistentEntity,
      trailerRental: persistentEntity?.trailerRental ? { id: persistentEntity.trailerRental } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
