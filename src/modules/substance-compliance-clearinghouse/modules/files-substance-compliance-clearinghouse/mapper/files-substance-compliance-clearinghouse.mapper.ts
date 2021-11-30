import { FilesSubstanceComplianceClearinghouseEntity } from '../entities/files-substance-compliance-clearinghouse.entity';

import { Injectable } from '@nestjs/common';
import { FilesSubstanceComplianceClearinghouseResponse } from '../graphql/dto/responses/files-substance-compliance-clearinghouse.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFilesSubstanceComplianceClearinghouseInput } from '../graphql/dto/inputs/create-files-substance-compliance-clearinghouse.input';

@Injectable()
export class FilesSubstanceComplianceClearinghouseMapper implements BaseMapper<FilesSubstanceComplianceClearinghouseEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFilesSubstanceComplianceClearinghouseInput>(dto: CreateFilesSubstanceComplianceClearinghouseInput): FilesSubstanceComplianceClearinghouseEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FilesSubstanceComplianceClearinghouseResponse>(dto: FilesSubstanceComplianceClearinghouseResponse): FilesSubstanceComplianceClearinghouseEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: FilesSubstanceComplianceClearinghouseEntity): FilesSubstanceComplianceClearinghouseResponse {
    return {
      ...persistentEntity,
      substanceComplianceClearinghouse: persistentEntity?.substanceComplianceClearinghouse ? { id: persistentEntity.substanceComplianceClearinghouse } : undefined,
      file: persistentEntity?.file ? { id: persistentEntity.file } : undefined,
    };
  }

}
