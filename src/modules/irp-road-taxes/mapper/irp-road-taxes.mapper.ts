import { IrpRoadTaxesEntity } from '../entities/irp-road-taxes.entity';

import { Injectable } from '@nestjs/common';
import { IrpRoadTaxesResponse } from '../graphql/dto/responses/irp-road-taxes.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateIrpRoadTaxesInput } from '../graphql/dto/inputs/create-irp-road-taxes.input';

@Injectable()
export class IrpRoadTaxesMapper implements BaseMapper<IrpRoadTaxesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateIrpRoadTaxesInput>(dto: CreateIrpRoadTaxesInput): IrpRoadTaxesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = IrpRoadTaxesResponse>(dto: IrpRoadTaxesResponse): IrpRoadTaxesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: IrpRoadTaxesEntity): IrpRoadTaxesResponse {
    return {
      ...persistentEntity,
      client: persistentEntity?.client ? { id: persistentEntity.client } : undefined,
    };
  }

}
