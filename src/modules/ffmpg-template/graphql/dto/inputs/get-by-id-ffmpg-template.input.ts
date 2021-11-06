import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdFfmpgTemplateInput {
  @Field(() => ID, )  entity__Id: string;
}
