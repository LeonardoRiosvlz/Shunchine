import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateFilesAnnualVehIspInput } from './create-files-annual-veh-isp.input';


@InputType()
export class PartialFilesAnnualVehIspInput extends PartialType(CreateFilesAnnualVehIspInput) {}

@InputType()
export class UpdateFilesAnnualVehIspInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialFilesAnnualVehIspInput)  update: PartialFilesAnnualVehIspInput;

}
