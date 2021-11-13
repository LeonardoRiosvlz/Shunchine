import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteClientInput {
  @Field(() => ID, )  entityId: string;
}
