import { SubstanceComplianceClearinghouseEntity } from '../entities/substance-compliance-clearinghouse.entity';

import { Injectable } from '@nestjs/common';
import { SubstanceComplianceClearinghouseResponse } from '../graphql/dto/responses/substance-compliance-clearinghouse.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateSubstanceComplianceClearinghouseInput } from '../graphql/dto/inputs/create-substance-compliance-clearinghouse.input';

@Injectable()
export class SubstanceComplianceClearinghouseMapper implements BaseMapper<SubstanceComplianceClearinghouseEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateSubstanceComplianceClearinghouseInput>(dto: CreateSubstanceComplianceClearinghouseInput): SubstanceComplianceClearinghouseEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = SubstanceComplianceClearinghouseResponse>(dto: SubstanceComplianceClearinghouseResponse): SubstanceComplianceClearinghouseEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: SubstanceComplianceClearinghouseEntity): SubstanceComplianceClearinghouseResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
