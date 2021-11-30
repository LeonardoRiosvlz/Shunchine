import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { TrailerRentalEntity } from '../entities/trailer-rental.entity';
import { FilesTrailerRentalRepository } from '../modules/files-trailer-rental/repositories/files-trailer-rental.repository';

@Injectable()
export class TrailerRentalRepository extends BaseRepository<TrailerRentalEntity, FilterableFieldsType<TrailerRentalEntity>>implements Partial<IEntityHooks<TrailerRentalEntity>> {
  constructor(
    private _filesTrailerRentalRepository:FilesTrailerRentalRepository,
    @Inject(TrailerRentalEntity.name) private readonly _trailerRentalModel: Model<TrailerRentalEntity>,
  ) {
    super(_trailerRentalModel, TrailerRentalRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(trailerRental: TrailerRentalEntity): Promise<void> {
    await this._filesTrailerRentalRepository.deleteMany({ trailerRental: { eq: trailerRental.id } });
  }
}
