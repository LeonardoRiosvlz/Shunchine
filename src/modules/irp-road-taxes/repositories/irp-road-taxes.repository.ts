import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { IrpRoadTaxesEntity, IrpRoadTaxesType } from '../entities/irp-road-taxes.entity';
import { FilesIrpRoadTaxesRepository } from '../modules/files-irp-road-taxes/repositories/files-irp-road-taxes.repository';

@Injectable()
export class IrpRoadTaxesRepository extends BaseRepository<IrpRoadTaxesEntity, FilterableFieldsType<IrpRoadTaxesEntity>> implements Partial<IEntityHooks<IrpRoadTaxesEntity>> {
  constructor( private _filesIrpRoadTaxesRepository:FilesIrpRoadTaxesRepository,
    @Inject(IrpRoadTaxesEntity.name) private readonly _irpRoadTaxesModel: Model<IrpRoadTaxesEntity>,
  ) {
    super(_irpRoadTaxesModel, IrpRoadTaxesRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(irpRoadTaxes: IrpRoadTaxesEntity): Promise<void> {
    await this._filesIrpRoadTaxesRepository.deleteMany({ irpRoadTaxes: { eq: irpRoadTaxes.id } });

  }
}
