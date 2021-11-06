import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteTranscoderInput {
  @Field(() => ID, )  entityId: string;
}
