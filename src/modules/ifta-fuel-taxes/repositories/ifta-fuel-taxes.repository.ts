import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IftaFuelTaxesEntity } from '../entities/ifta-fuel-taxes.entity';
import { FilesIftaFuelTaxesRepository } from '../modules/files-ifta-fuel-taxes/repositories/files-ifta-fuel-taxes.repository';

@Injectable()
export class IftaFuelTaxesRepository extends BaseRepository<IftaFuelTaxesEntity, FilterableFieldsType<IftaFuelTaxesEntity>>implements Partial <IEntityHooks<IftaFuelTaxesEntity>> {
  constructor(
    private _filesIftaFuelTaxesRepository:FilesIftaFuelTaxesRepository,
    @Inject(IftaFuelTaxesEntity.name) private readonly _iftaFuelTaxesModel: Model<IftaFuelTaxesEntity>,
  ) {
    super(_iftaFuelTaxesModel, IftaFuelTaxesRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(iftaFuelTaxes: IftaFuelTaxesEntity): Promise<void> {
    await this._filesIftaFuelTaxesRepository.deleteMany({ iftaFuelTaxes: { eq: iftaFuelTaxes.id } });

  }
}
