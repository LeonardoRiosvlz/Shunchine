import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFilesDotInfoInput {
  @Field(() => ID, )  entityId: string;
}
