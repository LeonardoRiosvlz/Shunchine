import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import { FfmpgTemplateEntity } from '../entities/ffmpg-template.entity';
import { FfmpgTemplateErrors } from '../errors/ffmpg-template.errors';
import { FfmpgTemplateRepository } from '../repositories/ffmpg-template.repository';


@Injectable()
export class FfmpgTemplateEntityService extends BaseEntityService<FfmpgTemplateEntity> {
  constructor(private readonly _ffmpgTemplateRepo: FfmpgTemplateRepository) {
    super(_ffmpgTemplateRepo, FfmpgTemplateEntity.name);
  }

  async create(entity: FfmpgTemplateEntity): Promise<Result<void>> {
    try {

      const exist = await this._ffmpgTemplateRepo.exist({ name: { eq: entity.name } })
      if (exist) {
        return Result.Fail(new FfmpgTemplateErrors.FfmpgTemplateFieldUsed('name', entity.name))
      }

      return super.create(entity)

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err))
    }

  }


  async updateById(id: string, update: Partial<FfmpgTemplateEntity>): Promise<Result<void>> {
    try {

      if (update?.name) {
        const exist = await this._ffmpgTemplateRepo.exist({ name: { eq: update.name } })
        if (exist) {
          return Result.Fail(new FfmpgTemplateErrors.FfmpgTemplateFieldUsed('name', update.name))
        }
      }

      return super.updateById(id, update);

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }
  }



}
