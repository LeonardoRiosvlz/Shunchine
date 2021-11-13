import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdClientInput {
  @Field(() => ID, )  entity__Id: string;
}
