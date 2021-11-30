import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFilesAnnualVehIspInput {
  @Field(() => ID, )  entity__Id: string;
}
