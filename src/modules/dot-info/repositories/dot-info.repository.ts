import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { DotInfoEntity } from '../entities/dot-info.entity';
import { FilesDotInfoRepository } from '../modules/files-dot-info/repositories/files-dot-info.repository';

@Injectable()
export class DotInfoRepository extends BaseRepository<DotInfoEntity, FilterableFieldsType<DotInfoEntity>>implements Partial <IEntityHooks<DotInfoEntity>> {
  constructor(
    private _filesDotInfoRepository:FilesDotInfoRepository,
    @Inject(DotInfoEntity.name) private readonly _dotInfoModel: Model<DotInfoEntity>,
  ) {
    super(_dotInfoModel, DotInfoRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(dotIfo: DotInfoEntity): Promise<void> {
    await this._filesDotInfoRepository.deleteMany({ dotInfo: { eq: dotIfo.id } });
  }
}
