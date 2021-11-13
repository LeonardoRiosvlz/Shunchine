import { Field,  ID, InputType,  PartialType} from '@nestjs/graphql';
import { CreateAnnualVehInspStateRermitsInput } from './create-annual-veh-insp-state-rermits.input';


@InputType()
export class PartialAnnualVehInspStateRermitsInput extends PartialType(CreateAnnualVehInspStateRermitsInput) {}

@InputType()
export class UpdateAnnualVehInspStateRermitsInput {
  @Field(() => ID, )  entityId: string;
  @Field(() => PartialAnnualVehInspStateRermitsInput)  update: PartialAnnualVehInspStateRermitsInput;

}
