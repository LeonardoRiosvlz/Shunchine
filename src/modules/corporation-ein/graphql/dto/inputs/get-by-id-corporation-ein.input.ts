import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdCorporationEinInput {
  @Field(() => ID, )  entity__Id: string;
}
