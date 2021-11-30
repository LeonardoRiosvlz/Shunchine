import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { AnnualVehInspStateRermitsEntity } from '../entities/annual-veh-insp-state-rermits.entity';
import { FilesAnnualVehIspRepository } from '../modules/files-annual-veh-isp/repositories/files-annual-veh-isp.repository';

@Injectable()
export class AnnualVehInspStateRermitsRepository extends BaseRepository<AnnualVehInspStateRermitsEntity, FilterableFieldsType<AnnualVehInspStateRermitsEntity>> implements Partial <IEntityHooks<AnnualVehInspStateRermitsEntity>> {
  constructor(
    private _filesAnnualVehIspRepository:FilesAnnualVehIspRepository,
    @Inject(AnnualVehInspStateRermitsEntity.name) private readonly _annualVehInspStateRermitsModel: Model<AnnualVehInspStateRermitsEntity>,
  ) {
    super(_annualVehInspStateRermitsModel, AnnualVehInspStateRermitsRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(annualVehInsp: AnnualVehInspStateRermitsEntity): Promise<void> {
    await this._filesAnnualVehIspRepository.deleteMany({ annualVehInsp: { eq: annualVehInsp.id } });

  }
}
