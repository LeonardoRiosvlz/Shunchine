import { IFixture } from '../../interfaces/IFixture';
import { ModelDefinition } from '@nestjs/mongoose';
import { UniqueEntityID } from '../../../data-access/mongoose/UniqueEntityID';

import { FfmpgOptionEntity, FfmpgOptionFeature } from 'src/modules/ffmpg-option/entities/ffmpg-option.entity';


export const ffmpgOptionFixture: IFixture<FfmpgOptionEntity, ModelDefinition> = {
  target: 'both',
  feature: FfmpgOptionFeature,
  entities: [
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-map 0:v:0"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-c:v libx264"
    },
    {
      id: new UniqueEntityID().toString(),
      default: false,
      option: "-map 0:a:0?"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-c:a aac"
    },
    {
      id: new UniqueEntityID().toString(),
      default: false,
      option: "-map 0:s:0?"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-level 3.0"
    },
    {
      id: new UniqueEntityID().toString(),
      default: false,
      option: "-master_pl_name master.m3u8"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-f hls"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-hls_segment_size 1000000"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-start_number 0"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-g 60"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-max_muxing_queue_size 1024"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-hls_time 1"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-force_key_frames expr:gte(t,n_forced*5)"
    },
    {
      id: new UniqueEntityID().toString(),
      default: true,
      option: "-hls_list_size 0"
    }

  ],
};