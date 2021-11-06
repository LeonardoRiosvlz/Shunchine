
export type TranscodeJobOptions = {
    resolution: any;
    template: string;
}

export interface ITranscodeJob {
    entityId: string;
    options: TranscodeJobOptions,
    metaData?: any;
}

