import { FfmpgTemplateEntity } from '../entities/ffmpg-template.entity';

import { Injectable } from '@nestjs/common';
import { FfmpgTemplateResponse } from '../graphql/dto/responses/ffmpg-template.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateFfmpgTemplateInput } from '../graphql/dto/inputs/create-ffmpg-template.input';

@Injectable()
export class FfmpgTemplateMapper implements BaseMapper<FfmpgTemplateEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateFfmpgTemplateInput>(dto: CreateFfmpgTemplateInput): FfmpgTemplateEntity {

    return {
      id: new UniqueEntityID().toString(),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = FfmpgTemplateResponse>(dto: FfmpgTemplateResponse): FfmpgTemplateEntity {
    throw new Error('Implements me!');
  }


  persistent2Dto({ ffmpgOpts, ...rest }: FfmpgTemplateEntity): FfmpgTemplateResponse {
    return {
      ...rest,
      ffmpgOpts: Array.from(ffmpgOpts).map((x) => { return { id: x } })
    };
  }

}
