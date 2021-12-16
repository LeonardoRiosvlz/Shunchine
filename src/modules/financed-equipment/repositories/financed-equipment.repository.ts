import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DotInfoEntity } from 'src/modules/dot-info/entities/dot-info.entity';
import { IEntityHooks } from 'src/shared/core/interfaces/IEntityHooks';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FinancedEquipmentEntity } from '../entities/financed-equipment.entity';
import { FilesFinancedEquipmentRepository } from '../modules/files-financed-equipment/repositories/files-financed-equipment.repository';

@Injectable()
export class FinancedEquipmentRepository extends BaseRepository<FinancedEquipmentEntity, FilterableFieldsType<FinancedEquipmentEntity>>implements Partial <IEntityHooks<DotInfoEntity>> {
  constructor(
    private _filesDotInfoRepository:FilesFinancedEquipmentRepository,
    @Inject(FinancedEquipmentEntity.name) private readonly _financedEquipmentModel: Model<FinancedEquipmentEntity>,
  ) {
    super(_financedEquipmentModel, FinancedEquipmentRepository.name,{
      afterDelete: (e) => this.afterDelete(e)
    });
  }
  async afterDelete(financedEquipment: FinancedEquipmentEntity): Promise<void> {
    await this._filesDotInfoRepository.deleteMany({ financedEquipment: { eq: financedEquipment.id } });
  }
}
