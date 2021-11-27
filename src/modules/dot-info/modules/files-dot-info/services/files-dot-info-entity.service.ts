import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { FilesDotInfoEntity } from '../entities/files-dot-info.entity';
import { FilesDotInfoRepository } from '../repositories/files-dot-info.repository';


@Injectable()
export class FilesDotInfoEntityService extends BaseEntityService<FilesDotInfoEntity> {
  constructor(private readonly _filesDotInfoRepo: FilesDotInfoRepository) {
    super(_filesDotInfoRepo, FilesDotInfoEntity.name);
  }




}
