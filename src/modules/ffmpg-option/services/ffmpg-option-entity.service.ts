import { Injectable, Res } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import { FfmpgOptionEntity } from '../entities/ffmpg-option.entity';
import { FfmpgOptionErrors } from '../errors/ffmpg-option.errors';
import { FfmpgOptionRepository } from '../repositories/ffmpg-option.repository';


@Injectable()
export class FfmpgOptionEntityService extends BaseEntityService<FfmpgOptionEntity> {
  constructor(private readonly _ffmpgOptionRepo: FfmpgOptionRepository) {
    super(_ffmpgOptionRepo, FfmpgOptionEntity.name);
  }


  async create(entity: FfmpgOptionEntity): Promise<Result<void>> {
    try {

      const exist = await this._ffmpgOptionRepo.exist({ option: { eq: entity.option } })
      if (exist) {
        return Result.Fail(new FfmpgOptionErrors.FfmpgOptionFieldUsed('option', entity.option))
      }

      return super.create(entity)

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err))
    }

  }


  async updateById(id: string, update: Partial<FfmpgOptionEntity>): Promise<Result<void>> {
    try {

      if (update?.option) {
        const exist = await this._ffmpgOptionRepo.exist({ option: { eq: update.option } })
        if (exist) {
          return Result.Fail(new FfmpgOptionErrors.FfmpgOptionFieldUsed('option', update.option))
        }
      }

      return super.updateById(id, update);

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }


}
