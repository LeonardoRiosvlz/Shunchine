import { TranscoderEntity } from '../entities/transcoder.entity';

import { Injectable } from '@nestjs/common';
import { TranscoderResponse } from '../graphql/dto/responses/transcoder.response';
import { BaseMapper } from 'src/shared/core/class/base.mapper';
import { UniqueEntityID } from 'src/shared/modules/data-access/mongoose/UniqueEntityID';
import { CreateTranscoderInput } from '../graphql/dto/inputs/create-transcoder.input';
import { generate } from 'generate-password';

@Injectable()
export class TranscoderMapper implements BaseMapper<TranscoderEntity> {

  // @ts-ignore
  dtoInput2Persistent<DTO = CreateTranscoderInput>(dto: CreateTranscoderInput): TranscoderEntity {

    return {
      id: new UniqueEntityID().toString(),
      folder: generate({ numbers: false, symbols: false, length: 6, uppercase: true }),
      ...dto,
    };
  }

  // @ts-ignore
  dtoResponse2Persistent<DTO = TranscoderResponse>(dto: TranscoderResponse): TranscoderEntity {
    throw new Error('Implements me!');
  }

  persistent2Dto({ user, mediaFile, options, ...rest }: TranscoderEntity): TranscoderResponse {
    return {
      ...rest,
      user: { id: user },
      mediaFile: { id: mediaFile },
      options: {
        ...options,
        template: options?.template ?
          { id: options.template } : undefined
      }
    };
  }

}
