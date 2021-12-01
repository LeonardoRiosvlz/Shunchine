import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesYardRentalEntity } from '../entities/files-yard-rental.entity';

@Injectable()
export class FilesYardRentalRepository extends BaseRepository<FilesYardRentalEntity, FilterableFieldsType<FilesYardRentalEntity>> {
  constructor(
    @Inject(FilesYardRentalEntity.name) private readonly _filesYardRentalModel: Model<FilesYardRentalEntity>,
  ) {
    super(_filesYardRentalModel, FilesYardRentalRepository.name);
  }
}
