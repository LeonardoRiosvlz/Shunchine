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
      drugRandomEnrollmentFile: persistentEntity?.drugRandomEnrollmentFile ? { id: persistentEntity.drugRandomEnrollmentFile } : undefined,
      reasonableSuspiciousFile: persistentEntity?.reasonableSuspiciousFile ? { id: persistentEntity.reasonableSuspiciousFile } : undefined,
      clearingHouseLoginFile: persistentEntity?.clearingHouseLoginFile ? { id: persistentEntity.clearingHouseLoginFile } : undefined,
      clearingHousePasswordFile: persistentEntity?.clearingHousePasswordFile ? { id: persistentEntity.clearingHousePasswordFile } : undefined,
      clearingHouseRegQueriesFile: persistentEntity?.clearingHouseRegQueriesFile ? { id: persistentEntity.clearingHouseRegQueriesFile } : undefined,
      otherSubstanceRequestFile: persistentEntity?.otherSubstanceRequestFile ? { id: persistentEntity.otherSubstanceRequestFile } : undefined,
    };
  }

}
