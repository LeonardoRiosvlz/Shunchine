import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdAnnualVehInspStateRermitsInput {
  @Field(() => ID, )  entity__Id: string;
}
