import { Result } from "src/shared/core/class/result";
import { Identifier } from "src/shared/core/interfaces/IEntity";



export interface ITranscodeOption {
    resolution: any
    ffmpgOpts?: Array<string>
}


export interface ITranscode {
    transcode(urlInput: string, folderOut: string, options: ITranscodeOption): Promise<Result<void>>;
    mediaInfo(urlInput: string): Promise<Result<unknown>>;

}