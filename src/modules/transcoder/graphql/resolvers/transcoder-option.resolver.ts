import { Parent, ResolveField, Resolver } from '@nestjs/graphql';



import { TranscoderMapper } from '../../mapper/transcoder.mapper';

import { Inject } from '@nestjs/common';

import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';

import { Result } from 'src/shared/core/class/result';


import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';

import { TranscodeOptionResponse } from '../dto/responses/transcode-option.response';
import { FfmpgTemplateEntity } from 'src/modules/ffmpg-template/entities/ffmpg-template.entity';
import { GetOneFfmpgTemplateQuery } from 'src/modules/ffmpg-template/cqrs/queries/impl/get-one-ffmpg-template.query';


@Resolver(() => TranscodeOptionResponse)
export class TranscoderOptionResolver extends BaseResolver {
  constructor(
    private readonly _transcoderMapper: TranscoderMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @ResolveField(() => SolvedEntityResponse, { nullable: true })
  async template(@Parent() parent?: TranscodeOptionResponse): Promise<SolvedEntityResponse> {
    if (parent?.template) {
      const templateOrErr = await this._cqrsBus.execQuery<Result<FfmpgTemplateEntity>>(new GetOneFfmpgTemplateQuery({
        where: {
          id: { eq: parent.template.id },
        },
      }));
      if (templateOrErr.isFailure) {
        return null;
      }
      const template = templateOrErr.unwrap();

      return {
        id: template.id,
        entityName: FfmpgTemplateEntity.name,
        identifier: template.name
      };

    }
  }


}
