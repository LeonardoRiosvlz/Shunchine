import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFfmpgTemplateInput {
  @Field(() => ID, )  entityId: string;
}
