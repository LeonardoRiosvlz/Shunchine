import { DotInfoEntity } from '../entities/dot-info.entity';

import { Injectable } from '@nestjs/common';
import { DotInfoResponse } from '../graphql/dto/responses/dot-info.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateDotInfoInput } from '../graphql/dto/inputs/create-dot-info.input';

@Injectable()
export class DotInfoMapper implements BaseMapper<DotInfoEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateDotInfoInput>(dto: CreateDotInfoInput): DotInfoEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = DotInfoResponse>(dto: DotInfoResponse): DotInfoEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: DotInfoEntity): DotInfoResponse {
    return {
      ...persistentEntity,
      dotFile: persistentEntity?.dotFile ? { id: persistentEntity.dotFile } : undefined,
      mcFile: persistentEntity?.mcFile ? { id: persistentEntity.mcFile } : undefined,
      taxIdFile: persistentEntity?.taxIdFile ? { id: persistentEntity.taxIdFile } : undefined,
      dotPinFile: persistentEntity?.dotPinFile ? { id: persistentEntity.dotPinFile } : undefined,
      mcPinFile: persistentEntity?.mcPinFile ? { id: persistentEntity.mcPinFile } : undefined,
      scacFile: persistentEntity?.scacFile ? { id: persistentEntity.scacFile } : undefined,
      ucrFile: persistentEntity?.ucrFile ? { id: persistentEntity.ucrFile } : undefined,
      bocThreeFile: persistentEntity?.bocThreeFile ? { id: persistentEntity.bocThreeFile } : undefined,
      docRoadInspectionFile: persistentEntity?.docRoadInspectionFile ? { id: persistentEntity.docRoadInspectionFile } : undefined,
      docAuditsFile: persistentEntity?.docAuditsFile ? { id: persistentEntity.docAuditsFile } : undefined,
      otherDotDocumentFile: persistentEntity?.otherDotDocumentFile ? { id: persistentEntity.otherDotDocumentFile } : undefined,
    };
  }

}
