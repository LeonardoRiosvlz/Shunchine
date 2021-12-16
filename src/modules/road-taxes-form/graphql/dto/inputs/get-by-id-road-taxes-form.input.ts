import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdRoadTaxesFormInput {
  @Field(() => ID, )  entity__Id: string;
}
