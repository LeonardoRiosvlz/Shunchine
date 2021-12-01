import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesYardRentalEntity } from '../entities/files-yard-rental.entity';
import { FilesYardRentalRepository } from '../repositories/files-yard-rental.repository';


@Injectable()
export class FilesYardRentalEntityService extends BaseEntityService<FilesYardRentalEntity> {
  constructor(private readonly _filesYardRentalRepo: FilesYardRentalRepository) {
    super(_filesYardRentalRepo, FilesYardRentalEntity.name);
  }




}
