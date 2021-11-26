import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesCorporationEinEntity } from '../entities/files-corporation-ein.entity';
import { FilesCorporationEinRepository } from '../repositories/files-corporation-ein.repository';


@Injectable()
export class FilesCorporationEinEntityService extends BaseEntityService<FilesCorporationEinEntity> {
  constructor(private readonly _filesCorporationEinRepo: FilesCorporationEinRepository) {
    super(_filesCorporationEinRepo, FilesCorporationEinEntity.name);
  }




}
