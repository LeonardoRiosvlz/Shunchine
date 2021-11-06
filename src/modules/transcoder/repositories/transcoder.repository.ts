import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesEntityService } from 'src/shared/modules/files/services/files-entity.service';
import { TranscoderEntity } from '../entities/transcoder.entity';
import { TranscodeFolderService } from '../services/transcode-folder.service';

@Injectable()
export class TranscoderRepository extends BaseRepository<TranscoderEntity, FilterableFieldsType<TranscoderEntity>>
  implements Partial<IEntityHooks<TranscoderEntity>> {
  constructor(private readonly _folderService: TranscodeFolderService,
    private readonly _fileService: FilesEntityService,
    @Inject(TranscoderEntity.name) private readonly _transcoderModel: Model<TranscoderEntity>,
  ) {
    super(_transcoderModel, TranscoderRepository.name, {
      afterDelete: (e) => this.afterDelete(e)
    });
  }

  async afterDelete(e: TranscoderEntity): Promise<void> {
    await this._folderService.cleanMediaFolder(e.folder)
    if(e.mediaFile){
      await this._fileService.deleteById(e.mediaFile)
    }
  }



}
