import { registerAs } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { IFfmpgConfig } from '../interfaces/IFfmpgConfig';

export const ffmpgConfig = registerAs('ffmpg', (): IFfmpgConfig => ({
  ffpmgPath: process.env.FFMPEG_PATH,
  ffprobePath: process.env.FFPROBE_PATH,
  flvToolPath: process.env.FLVTOOL_PATH,
  outPath: process.env.OUTPUT_PATH
  
}));

export const ffmpgSchema = {
  OUTPUT_PATH: Joi.string().required(),
};
