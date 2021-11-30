import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesTrailerRentalEntity } from '../entities/files-trailer-rental.entity';

@Injectable()
export class FilesTrailerRentalRepository extends BaseRepository<FilesTrailerRentalEntity, FilterableFieldsType<FilesTrailerRentalEntity>> {
  constructor(
    @Inject(FilesTrailerRentalEntity.name) private readonly _filesTrailerRentalModel: Model<FilesTrailerRentalEntity>,
  ) {
    super(_filesTrailerRentalModel, FilesTrailerRentalRepository.name);
  }
}
