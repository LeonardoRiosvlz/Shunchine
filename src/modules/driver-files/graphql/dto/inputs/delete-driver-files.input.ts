import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteDriverFilesInput {
  @Field(() => ID, )  entityId: string;
}
