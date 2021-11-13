import { IftaFuelTaxesEntity } from '../entities/ifta-fuel-taxes.entity';

import { Injectable } from '@nestjs/common';
import { IftaFuelTaxesResponse } from '../graphql/dto/responses/ifta-fuel-taxes.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateIftaFuelTaxesInput } from '../graphql/dto/inputs/create-ifta-fuel-taxes.input';

@Injectable()
export class IftaFuelTaxesMapper implements BaseMapper<IftaFuelTaxesEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateIftaFuelTaxesInput>(dto: CreateIftaFuelTaxesInput): IftaFuelTaxesEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = IftaFuelTaxesResponse>(dto: IftaFuelTaxesResponse): IftaFuelTaxesEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto(persistentEntity: IftaFuelTaxesEntity): IftaFuelTaxesResponse {
    return {
      ...persistentEntity,
    };
  }

}
