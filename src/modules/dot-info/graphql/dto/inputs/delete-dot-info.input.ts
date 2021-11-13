import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteDotInfoInput {
  @Field(() => ID, )  entityId: string;
}
