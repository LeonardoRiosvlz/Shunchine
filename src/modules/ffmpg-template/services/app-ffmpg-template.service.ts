import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { GetAllFfmpgOptionQuery } from 'src/modules/ffmpg-option/cqrs/queries/impl/get-all-ffmpg-option.query';
import { FfmpgOptionEntity } from 'src/modules/ffmpg-option/entities/ffmpg-option.entity';
import { Result } from 'src/shared/core/class/result';
import { AppError } from 'src/shared/core/errors/AppError';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GetOneFfmpgTemplateQuery } from '../cqrs/queries/impl/get-one-ffmpg-template.query';
import { FfmpgTemplateEntity } from '../entities/ffmpg-template.entity';


@Injectable()
export class AppFfmpgTemplateService {
  constructor(@Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,) { }




  async extractOptions(templateId: string): Promise<Result<Array<FfmpgOptionEntity>>> {

    try {
      const templateOrErr = await this._cqrsBus.execQuery<Result<FfmpgTemplateEntity>>(new GetOneFfmpgTemplateQuery({
        where: { id: { eq: templateId } }
      }))

      if (templateOrErr.isFailure) {
        return Result.Fail(templateOrErr.unwrapError())
      }

      const template = templateOrErr.unwrap()

      return await this._cqrsBus.execQuery<Result<Array<FfmpgOptionEntity>>>(new GetAllFfmpgOptionQuery({
        where: { id: { in: template.ffmpgOpts } }
      }));

    } catch (err) {
      return Result.Fail(new AppError.UnexpectedError(err))
    }
  }


}
