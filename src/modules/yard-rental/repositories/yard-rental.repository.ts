import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { YardRentalEntity } from '../entities/yard-rental.entity';
import { FilesYardRentalRepository } from '../modules/files-yard-rental/repositories/files-yard-rental.repository';

@Injectable()
export class YardRentalRepository extends BaseRepository<YardRentalEntity, FilterableFieldsType<YardRentalEntity>>implements Partial<IEntityHooks<YardRentalEntity>> {
  constructor(
    private _filesYardRentalRepository:FilesYardRentalRepository,
    @Inject(YardRentalEntity.name) private readonly _yardRentalModel: Model<YardRentalEntity>,
  ) {
    super(_yardRentalModel, YardRentalRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(yardRental: YardRentalEntity): Promise<void> {
    await this._filesYardRentalRepository.deleteMany({ yardRental: { eq: yardRental.id } });
  }
}
