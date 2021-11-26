import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFilesCorporationEinInput {
  @Field(() => ID, )  entity__Id: string;
}
