import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { CorporationEinEntity } from '../entities/corporation-ein.entity';
import { FilesCorporationEinRepository } from '../modules/files-corporation-ein/repositories/files-corporation-ein.repository';

@Injectable()
export class CorporationEinRepository extends BaseRepository<CorporationEinEntity, FilterableFieldsType<CorporationEinEntity>> implements Partial <IEntityHooks<CorporationEinEntity>> {
  constructor(
          private _filesCorporationEinRepository:FilesCorporationEinRepository,
    @Inject(CorporationEinEntity.name) private readonly _corporationEinModel: Model<CorporationEinEntity>,
  ) {
    super(_corporationEinModel, CorporationEinRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(corporationEin: CorporationEinEntity): Promise<void> {
    await this._filesCorporationEinRepository.deleteMany({ corporationEin: { eq: corporationEin.id } });

  }
}
