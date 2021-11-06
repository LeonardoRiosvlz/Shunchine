import { Model } from "mongoose";
import { FfmpgOptionEntity, FfmpgOptionFeature } from "src/modules/ffmpg-option/entities/ffmpg-option.entity";
import { FfmpgTemplateEntity, FfmpgTemplateFeature } from "src/modules/ffmpg-template/entities/ffmpg-template.entity";
import { IEntity } from "src/shared/core/interfaces/IEntity";
import { ITenant } from "src/shared/core/interfaces/ITenant";
import { UniqueEntityID } from "../../data-access/mongoose/UniqueEntityID";
import { ModelDef } from "../interfaces/IFixture";
import { IFixtureService } from "../interfaces/IFixtureService";


export class ComputedDataService {

    constructor(
        private service: IFixtureService,
        private tenant?: ITenant
    ) {

    }


    async process(): Promise<void> {

        if (!this.tenant) {

            const templateRepo = this.service.getRepository<FfmpgTemplateEntity, ModelDef>(FfmpgTemplateFeature) as Model<FfmpgTemplateEntity>;
            const optionRepo = this.service.getRepository<FfmpgOptionEntity, ModelDef>(FfmpgOptionFeature) as Model<FfmpgOptionEntity>;

            if (templateRepo && optionRepo) {
                const templateCount = await templateRepo.countDocuments({});
                if (templateCount === 0) {

                    const options = await optionRepo.find({ default: true })
                    await templateRepo.create({
                        id: new UniqueEntityID().toString(),
                        name: 'Default Template',
                        description: 'Default Template',
                        ffmpgOpts: options.map(x => x.id)

                    })





                }
            }


        }


    }



}