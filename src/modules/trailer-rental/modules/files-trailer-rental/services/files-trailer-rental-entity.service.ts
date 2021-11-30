import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesTrailerRentalEntity } from '../entities/files-trailer-rental.entity';
import { FilesTrailerRentalRepository } from '../repositories/files-trailer-rental.repository';


@Injectable()
export class FilesTrailerRentalEntityService extends BaseEntityService<FilesTrailerRentalEntity> {
  constructor(private readonly _filesTrailerRentalRepo: FilesTrailerRentalRepository) {
    super(_filesTrailerRentalRepo, FilesTrailerRentalEntity.name);
  }




}
