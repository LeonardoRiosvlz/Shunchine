import { AnnualVehInspStateRermitsEntity } from '../entities/annual-veh-insp-state-rermits.entity';

import { Injectable } from '@nestjs/common';
import { AnnualVehInspStateRermitsResponse } from '../graphql/dto/responses/annual-veh-insp-state-rermits.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateAnnualVehInspStateRermitsInput } from '../graphql/dto/inputs/create-annual-veh-insp-state-rermits.input';

@Injectable()
export class AnnualVehInspStateRermitsMapper implements BaseMapper<AnnualVehInspStateRermitsEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateAnnualVehInspStateRermitsInput>(dto: CreateAnnualVehInspStateRermitsInput): AnnualVehInspStateRermitsEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = AnnualVehInspStateRermitsResponse>(dto: AnnualVehInspStateRermitsResponse): AnnualVehInspStateRermitsEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: AnnualVehInspStateRermitsEntity): AnnualVehInspStateRermitsResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,

    };
  }

}
