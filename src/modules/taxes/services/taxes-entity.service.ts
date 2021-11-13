import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';

import { TaxesEntity } from '../entities/taxes.entity';
import { TaxesRepository } from '../repositories/taxes.repository';
import { TaxesErrors } from '../errors/taxes.errors';

@Injectable()
export class TaxesEntityService extends BaseEntityService<TaxesEntity> {
  constructor(private readonly _taxesRepo: TaxesRepository) {
    super(_taxesRepo, TaxesEntity.name);
  }


  async create(entity: TaxesEntity): Promise<Result<void>> {

    try {
      const exists =await this.repo.exist({ name: { eq: entity.name } });

      if (exists) {
        return Result.Fail(new TaxesErrors.TaxesFieldUsed('name', entity.name));
      }
      await super.create(entity);
      return Result.Ok();


    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err));
    }

  }

}
