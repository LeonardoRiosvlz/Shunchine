import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFfmpgOptionInput {
  @Field(() => ID, )  entity__Id: string;
}
